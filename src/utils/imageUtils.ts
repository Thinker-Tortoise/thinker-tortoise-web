export const getImagePath = (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // In production, use relative paths for custom domain, full path for GitHub Pages
    if (process.env.NODE_ENV === 'production') {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        return `${basePath}/${cleanPath}`.replace(/\/+$/, '');
    }
    
    // In development, use the path as is
    return `/${cleanPath}`;
};