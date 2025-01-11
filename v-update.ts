#!/usr/bin/env bun
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

type PackageJson = {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	[key: string]: unknown;
};

async function getLatestVersion(packageName: string): Promise<string> {
	try {
		const response = await fetch(`https://registry.npmjs.org/${packageName}`);
		const data = await response.json();
		const latestVersion = data['dist-tags'].latest;
		return `^${latestVersion}`; // Add caret for semver compatibility
	} catch (error) {
		console.error(`Failed to fetch version for ${packageName}:`, error);
		throw error;
	}
}

async function updateDependencies() {
	const packagePath = './package.json';

	if (!existsSync(packagePath)) {
		throw new Error('package.json not found in current directory');
	}

	// Read and parse package.json
	const rawPackage = await readFile(packagePath, 'utf8');
	const pkg = JSON.parse(rawPackage) as PackageJson;

	// Create backup
	await writeFile('package.json.backup', rawPackage);
	console.log('📦 Created backup at package.json.backup');

	// Update regular dependencies
	if (pkg.dependencies) {
		console.log('\n📥 Updating dependencies...');
		for (const [dep] of Object.entries(pkg.dependencies)) {
			try {
				const version = await getLatestVersion(dep);
				pkg.dependencies[dep] = version;
				console.log(`Updated ${dep} to ${version}`);
			} catch (error) {
				console.error(`❌ Failed to update ${dep}`);
			}
		}
	}

	// Update dev dependencies
	if (pkg.devDependencies) {
		console.log('\n📥 Updating dev dependencies...');
		for (const [dep] of Object.entries(pkg.devDependencies)) {
			try {
				const version = await getLatestVersion(dep);
				pkg.devDependencies[dep] = version;
				console.log(`Updated ${dep} to ${version}`);
			} catch (error) {
				console.error(`❌ Failed to update ${dep}`);
			}
		}
	}

	// Write the updated package.json
	await writeFile(packagePath, JSON.stringify(pkg, null, 2));

	console.log('\n✅ All dependencies updated successfully!');
	console.log('🔨 Run "bun install" to install the updated dependencies');
}

// Run the script
updateDependencies().catch((error) => {
	console.error('Failed to update dependencies:', error);
	process.exit(1);
});
