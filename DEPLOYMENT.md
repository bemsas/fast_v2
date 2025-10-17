# Vercel Deployment Guide

This document provides instructions for deploying the Venipak front page to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Node.js**: Install Node.js 18+ for local development (optional)

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select the repository containing this project

2. **Configure Project**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (if project is in root)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: `./` (current directory)
   - **Install Command**: `npm install` (optional)

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically deploy your site
   - You'll get a production URL like `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**:
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

### Method 3: Drag and Drop

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Drag and drop your project folder (excluding `.kiro`, `.vscode`, `node_modules`)
3. Vercel will automatically deploy the static files

## Configuration Files

### vercel.json
- Configures Vercel deployment settings
- Sets up security headers
- Configures caching for static assets
- Routes configuration for SPA behavior

### package.json
- Project metadata and scripts
- Development dependencies
- Node.js version specification

### .vercelignore
- Excludes unnecessary files from deployment
- Reduces deployment size and time
- Keeps sensitive development files local

## Environment Variables (if needed)

If your project requires environment variables:

1. **In Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add your variables for Production, Preview, and Development

2. **Using Vercel CLI**:
   ```bash
   vercel env add VARIABLE_NAME
   ```

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP addresses

## Performance Optimization

The deployment is configured with:

- **Static Asset Caching**: 1 year cache for CSS, JS, and assets
- **Security Headers**: XSS protection, content type sniffing protection
- **Font Optimization**: Preconnect and preload for Google Fonts
- **Compression**: Automatic gzip/brotli compression by Vercel

## Monitoring and Analytics

1. **Vercel Analytics**: Enable in Project Settings → Analytics
2. **Performance Monitoring**: Built-in Web Vitals tracking
3. **Function Logs**: Available in Vercel dashboard (if using functions)

## Troubleshooting

### Common Issues

1. **404 Errors**: Check that `index.html` is in the root directory
2. **CSS/JS Not Loading**: Verify file paths are relative and correct
3. **Font Loading Issues**: Ensure Google Fonts URLs are valid
4. **Build Failures**: Check Node.js version compatibility

### Debug Steps

1. **Check Build Logs**: Available in Vercel dashboard
2. **Test Locally**: Use `vercel dev` for local testing
3. **Verify File Structure**: Ensure all referenced files exist
4. **Check Console**: Browser developer tools for client-side errors

## Automatic Deployments

With Git integration:
- **Production**: Deploys automatically on pushes to main/master branch
- **Preview**: Creates preview deployments for pull requests
- **Branch Deployments**: Each branch gets its own preview URL

## Post-Deployment Checklist

- [ ] Verify site loads correctly at production URL
- [ ] Test all navigation and interactive elements
- [ ] Check mobile responsiveness
- [ ] Verify font loading and design tokens
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (if applicable)
- [ ] Configure analytics (if needed)

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status Page**: [vercel-status.com](https://vercel-status.com)