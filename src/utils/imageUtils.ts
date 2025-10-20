export const getImagePath = (path: string) => {
    // Ensure path starts with a single slash
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // In production, use relative paths for custom domain, full path for GitHub Pages
    if (process.env.NODE_ENV === 'production') {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        // Remove any double slashes that might occur from joining paths
        return `${basePath}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
    }
    
    // In development, use the path as is
    return cleanPath;
};