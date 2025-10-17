#!/usr/bin/env node

/**
 * Pre-deployment check script
 * Verifies that all necessary files are present and properly configured
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Venipak Front Page - Deployment Check\n');

const requiredFiles = [
  'index.html',
  'css/main.css',
  'css/components.css',
  'css/responsive.css',
  'js/main.js',
  'js/animations.js',
  'vercel.json',
  'package.json'
];

const optionalFiles = [
  'README.md',
  'DEPLOYMENT.md',
  '.gitignore',
  '.vercelignore'
];

let allGood = true;

// Check required files
console.log('📋 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allGood = false;
  }
});

// Check optional files
console.log('\n📋 Checking optional files...');
optionalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`⚠️  ${file} - Optional but recommended`);
  }
});

// Check package.json structure
console.log('\n📦 Checking package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (pkg.name) {
    console.log(`✅ Project name: ${pkg.name}`);
  } else {
    console.log('⚠️  No project name specified');
  }
  
  if (pkg.scripts && pkg.scripts.deploy) {
    console.log('✅ Deploy script configured');
  } else {
    console.log('⚠️  No deploy script found');
  }
  
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  allGood = false;
}

// Check vercel.json structure
console.log('\n⚡ Checking vercel.json...');
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  
  if (vercelConfig.builds) {
    console.log('✅ Build configuration found');
  } else {
    console.log('⚠️  No build configuration');
  }
  
  if (vercelConfig.headers) {
    console.log('✅ Security headers configured');
  } else {
    console.log('⚠️  No security headers configured');
  }
  
} catch (error) {
  console.log('❌ Error reading vercel.json:', error.message);
  allGood = false;
}

// Check HTML structure
console.log('\n🌐 Checking HTML structure...');
try {
  const html = fs.readFileSync('index.html', 'utf8');
  
  if (html.includes('<!DOCTYPE html>')) {
    console.log('✅ Valid HTML5 doctype');
  } else {
    console.log('⚠️  Missing HTML5 doctype');
  }
  
  if (html.includes('lang="en"')) {
    console.log('✅ Language attribute set');
  } else {
    console.log('⚠️  Missing language attribute');
  }
  
  if (html.includes('viewport')) {
    console.log('✅ Viewport meta tag found');
  } else {
    console.log('⚠️  Missing viewport meta tag');
  }
  
} catch (error) {
  console.log('❌ Error reading index.html:', error.message);
  allGood = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 All checks passed! Ready for deployment.');
  console.log('\nNext steps:');
  console.log('1. Push to Git repository');
  console.log('2. Connect to Vercel');
  console.log('3. Deploy automatically');
  console.log('\nOr use: npm run deploy');
} else {
  console.log('❌ Some issues found. Please fix before deploying.');
  process.exit(1);
}

console.log('='.repeat(50));