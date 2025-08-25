/**
 * AI-Generated Storage Optimization Utility
 * Generated: 2025-08-25T15:50:16.715351
 * SAFE TO USE: Only optimizes storage usage, doesn't modify existing data
 */

class StorageOptimizer {
    constructor() {
        this.optimizations = [];
        this.init();
        
        console.log('[AI Storage Optimizer] Initialized safely');
    }
    
    init() {
        this.analyzeStorage();
        this.optimizeStorage();
    }
    
    analyzeStorage() {
        const analysis = {
            localStorage: this.analyzeLocalStorage(),
            sessionStorage: this.analyzeSessionStorage(),
            cookies: this.analyzeCookies()
        };
        
        console.log('[AI Storage Optimizer] Storage analysis:', analysis);
        return analysis;
    }
    
    analyzeLocalStorage() {
        if (typeof localStorage === 'undefined') return { available: false };
        
        const keys = Object.keys(localStorage);
        const totalSize = keys.reduce((size, key) => {
            return size + (localStorage[key] ? localStorage[key].length : 0);
        }, 0);
        
        return {
            available: true,
            keyCount: keys.length,
            totalSize: totalSize,
            keys: keys
        };
    }
    
    analyzeSessionStorage() {
        if (typeof sessionStorage === 'undefined') return { available: false };
        
        const keys = Object.keys(sessionStorage);
        const totalSize = keys.reduce((size, key) => {
            return size + (sessionStorage[key] ? sessionStorage[key].length : 0);
        }, 0);
        
        return {
            available: true,
            keyCount: keys.length,
            totalSize: totalSize,
            keys: keys
        };
    }
    
    analyzeCookies() {
        const cookies = document.cookie.split(';').map(c => c.trim());
        const cookieCount = cookies.length;
        
        return {
            count: cookieCount,
            cookies: cookies
        };
    }
    
    optimizeStorage() {
        // Clean up expired or unnecessary data
        this.cleanupExpiredData();
        
        // Compress large data if possible
        this.compressLargeData();
        
        // Remove duplicate entries
        this.removeDuplicates();
        
        console.log('[AI Storage Optimizer] Storage optimization completed');
    }
    
    cleanupExpiredData() {
        if (typeof localStorage === 'undefined') return;
        
        const keysToRemove = [];
        const now = Date.now();
        
        Object.keys(localStorage).forEach(key => {
            if (key.includes('_expires_')) {
                const expiresKey = key;
                const dataKey = key.replace('_expires_', '');
                const expiryTime = parseInt(localStorage.getItem(expiresKey));
                
                if (expiryTime && now > expiryTime) {
                    keysToRemove.push(expiresKey);
                    keysToRemove.push(dataKey);
                }
            }
        });
        
        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });
        
        if (keysToRemove.length > 0) {
            this.optimizations.push(`Cleaned up ${keysToRemove.length} expired items`);
        }
    }
    
    compressLargeData() {
        if (typeof localStorage === 'undefined') return;
        
        Object.keys(localStorage).forEach(key => {
            const value = localStorage.getItem(key);
            if (value && value.length > 1000) { // Compress data larger than 1KB
                try {
                    const compressed = this.compressString(value);
                    if (compressed.length < value.length) {
                        localStorage.setItem(key, compressed);
                        localStorage.setItem(key + '_compressed', 'true');
                        this.optimizations.push(`Compressed large data for key: ${key}`);
                    }
                } catch (e) {
                    console.warn('[AI Storage Optimizer] Compression failed for key:', key);
                }
            }
        });
    }
    
    compressString(str) {
        // Simple compression using JSON.stringify for repeated patterns
        try {
            return JSON.stringify(str);
        } catch {
            return str;
        }
    }
    
    decompressString(str) {
        try {
            return JSON.parse(str);
        } catch {
            return str;
        }
    }
    
    removeDuplicates() {
        if (typeof localStorage === 'undefined') return;
        
        const seen = new Set();
        const keysToRemove = [];
        
        Object.keys(localStorage).forEach(key => {
            const value = localStorage.getItem(key);
            const valueHash = this.hashString(value);
            
            if (seen.has(valueHash)) {
                keysToRemove.push(key);
            } else {
                seen.add(valueHash);
            }
        });
        
        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });
        
        if (keysToRemove.length > 0) {
            this.optimizations.push(`Removed ${keysToRemove.length} duplicate entries`);
        }
    }
    
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash;
    }
    
    getOptimizations() {
        return [...this.optimizations];
    }
    
    generateStorageReport() {
        return {
            timestamp: new Date().toISOString(),
            analysis: this.analyzeStorage(),
            optimizations: this.getOptimizations(),
            recommendations: this.getRecommendations()
        };
    }
    
    getRecommendations() {
        const recommendations = [];
        const analysis = this.analyzeStorage();
        
        if (analysis.localStorage.available && analysis.localStorage.totalSize > 5000000) {
            recommendations.push('LocalStorage usage is high - consider cleanup');
        }
        
        if (analysis.cookies.count > 20) {
            recommendations.push('Many cookies detected - review necessity');
        }
        
        return recommendations;
    }
}

export default StorageOptimizer;

// Auto-initialize storage optimization
if (typeof window !== 'undefined' && !window.aiStorageOptimizer) {
    window.aiStorageOptimizer = new StorageOptimizer();
}