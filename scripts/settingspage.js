// Use centralized Settings API
const config = window.SITE_CONFIG || { cloakPresets: [] };
let settings = Settings.getAll();
const saveSettings = (s) => {
    Settings.update(s);
    // Update local ref just in case
    settings = Settings.getAll();
};

const featureCatalog = [
    { id: 'smart-search', name: 'Smart Search', desc: 'Smart search mode streamlines your flow.', defaultEnabled: true },
    { id: 'smart-launch', name: 'Smart Launch', desc: 'Smart launch mode keeps content ready faster.' },
    { id: 'smart-library', name: 'Smart Library', desc: 'Smart library mode delivers smoother transitions.' },
    { id: 'smart-theme', name: 'Smart Theme', desc: 'Smart theme mode boosts clarity and focus.' },
    { id: 'smart-audio', name: 'Smart Audio', desc: 'Smart audio mode reduces interruptions.' },
    { id: 'smart-video', name: 'Smart Video', desc: 'Smart video mode adds extra control.' },
    { id: 'smart-navigation', name: 'Smart Navigation', desc: 'Smart navigation mode improves responsiveness.' },
    { id: 'smart-downloads', name: 'Smart Downloads', desc: 'Smart downloads mode keeps things lightweight.' },
    { id: 'smart-privacy', name: 'Smart Privacy', desc: 'Smart privacy mode prioritizes important items.' },
    { id: 'smart-sync', name: 'Smart Sync', desc: 'Smart sync mode balances quality and speed.' },
    { id: 'quick-search', name: 'Quick Search', desc: 'Quick search mode keeps content ready faster.' },
    { id: 'quick-launch', name: 'Quick Launch', desc: 'Quick launch mode delivers smoother transitions.', defaultEnabled: true },
    { id: 'quick-library', name: 'Quick Library', desc: 'Quick library mode boosts clarity and focus.' },
    { id: 'quick-theme', name: 'Quick Theme', desc: 'Quick theme mode reduces interruptions.' },
    { id: 'quick-audio', name: 'Quick Audio', desc: 'Quick audio mode adds extra control.' },
    { id: 'quick-video', name: 'Quick Video', desc: 'Quick video mode improves responsiveness.' },
    { id: 'quick-navigation', name: 'Quick Navigation', desc: 'Quick navigation mode keeps things lightweight.' },
    { id: 'quick-downloads', name: 'Quick Downloads', desc: 'Quick downloads mode prioritizes important items.' },
    { id: 'quick-privacy', name: 'Quick Privacy', desc: 'Quick privacy mode balances quality and speed.' },
    { id: 'quick-sync', name: 'Quick Sync', desc: 'Quick sync mode streamlines your flow.' },
    { id: 'adaptive-search', name: 'Adaptive Search', desc: 'Adaptive search mode delivers smoother transitions.' },
    { id: 'adaptive-launch', name: 'Adaptive Launch', desc: 'Adaptive launch mode boosts clarity and focus.' },
    { id: 'adaptive-library', name: 'Adaptive Library', desc: 'Adaptive library mode reduces interruptions.' },
    { id: 'adaptive-theme', name: 'Adaptive Theme', desc: 'Adaptive theme mode adds extra control.' },
    { id: 'adaptive-audio', name: 'Adaptive Audio', desc: 'Adaptive audio mode improves responsiveness.' },
    { id: 'adaptive-video', name: 'Adaptive Video', desc: 'Adaptive video mode keeps things lightweight.' },
    { id: 'adaptive-navigation', name: 'Adaptive Navigation', desc: 'Adaptive navigation mode prioritizes important items.', defaultEnabled: true },
    { id: 'adaptive-downloads', name: 'Adaptive Downloads', desc: 'Adaptive downloads mode balances quality and speed.' },
    { id: 'adaptive-privacy', name: 'Adaptive Privacy', desc: 'Adaptive privacy mode streamlines your flow.' },
    { id: 'adaptive-sync', name: 'Adaptive Sync', desc: 'Adaptive sync mode keeps content ready faster.' },
    { id: 'live-search', name: 'Live Search', desc: 'Live search mode boosts clarity and focus.' },
    { id: 'live-launch', name: 'Live Launch', desc: 'Live launch mode reduces interruptions.' },
    { id: 'live-library', name: 'Live Library', desc: 'Live library mode adds extra control.' },
    { id: 'live-theme', name: 'Live Theme', desc: 'Live theme mode improves responsiveness.' },
    { id: 'live-audio', name: 'Live Audio', desc: 'Live audio mode keeps things lightweight.' },
    { id: 'live-video', name: 'Live Video', desc: 'Live video mode prioritizes important items.', defaultEnabled: true },
    { id: 'live-navigation', name: 'Live Navigation', desc: 'Live navigation mode balances quality and speed.' },
    { id: 'live-downloads', name: 'Live Downloads', desc: 'Live downloads mode streamlines your flow.' },
    { id: 'live-privacy', name: 'Live Privacy', desc: 'Live privacy mode keeps content ready faster.' },
    { id: 'live-sync', name: 'Live Sync', desc: 'Live sync mode delivers smoother transitions.' },
    { id: 'focused-search', name: 'Focused Search', desc: 'Focused search mode reduces interruptions.' },
    { id: 'focused-launch', name: 'Focused Launch', desc: 'Focused launch mode adds extra control.' },
    { id: 'focused-library', name: 'Focused Library', desc: 'Focused library mode improves responsiveness.' },
    { id: 'focused-theme', name: 'Focused Theme', desc: 'Focused theme mode keeps things lightweight.' },
    { id: 'focused-audio', name: 'Focused Audio', desc: 'Focused audio mode prioritizes important items.', defaultEnabled: true },
    { id: 'focused-video', name: 'Focused Video', desc: 'Focused video mode balances quality and speed.' },
    { id: 'focused-navigation', name: 'Focused Navigation', desc: 'Focused navigation mode streamlines your flow.' },
    { id: 'focused-downloads', name: 'Focused Downloads', desc: 'Focused downloads mode keeps content ready faster.' },
    { id: 'focused-privacy', name: 'Focused Privacy', desc: 'Focused privacy mode delivers smoother transitions.' },
    { id: 'focused-sync', name: 'Focused Sync', desc: 'Focused sync mode boosts clarity and focus.' },
    { id: 'quiet-search', name: 'Quiet Search', desc: 'Quiet search mode adds extra control.' },
    { id: 'quiet-launch', name: 'Quiet Launch', desc: 'Quiet launch mode improves responsiveness.' },
    { id: 'quiet-library', name: 'Quiet Library', desc: 'Quiet library mode keeps things lightweight.' },
    { id: 'quiet-theme', name: 'Quiet Theme', desc: 'Quiet theme mode prioritizes important items.' },
    { id: 'quiet-audio', name: 'Quiet Audio', desc: 'Quiet audio mode balances quality and speed.' },
    { id: 'quiet-video', name: 'Quiet Video', desc: 'Quiet video mode streamlines your flow.' },
    { id: 'quiet-navigation', name: 'Quiet Navigation', desc: 'Quiet navigation mode keeps content ready faster.' },
    { id: 'quiet-downloads', name: 'Quiet Downloads', desc: 'Quiet downloads mode delivers smoother transitions.' },
    { id: 'quiet-privacy', name: 'Quiet Privacy', desc: 'Quiet privacy mode boosts clarity and focus.' },
    { id: 'quiet-sync', name: 'Quiet Sync', desc: 'Quiet sync mode reduces interruptions.', defaultEnabled: true },
    { id: 'ultra-search', name: 'Ultra Search', desc: 'Ultra search mode improves responsiveness.' },
    { id: 'ultra-launch', name: 'Ultra Launch', desc: 'Ultra launch mode keeps things lightweight.' },
    { id: 'ultra-library', name: 'Ultra Library', desc: 'Ultra library mode prioritizes important items.' },
    { id: 'ultra-theme', name: 'Ultra Theme', desc: 'Ultra theme mode balances quality and speed.' },
    { id: 'ultra-audio', name: 'Ultra Audio', desc: 'Ultra audio mode streamlines your flow.' },
    { id: 'ultra-video', name: 'Ultra Video', desc: 'Ultra video mode keeps content ready faster.' },
    { id: 'ultra-navigation', name: 'Ultra Navigation', desc: 'Ultra navigation mode delivers smoother transitions.' },
    { id: 'ultra-downloads', name: 'Ultra Downloads', desc: 'Ultra downloads mode boosts clarity and focus.', defaultEnabled: true },
    { id: 'ultra-privacy', name: 'Ultra Privacy', desc: 'Ultra privacy mode reduces interruptions.' },
    { id: 'ultra-sync', name: 'Ultra Sync', desc: 'Ultra sync mode adds extra control.' },
    { id: 'auto-search', name: 'Auto Search', desc: 'Auto search mode keeps things lightweight.' },
    { id: 'auto-launch', name: 'Auto Launch', desc: 'Auto launch mode prioritizes important items.' },
    { id: 'auto-library', name: 'Auto Library', desc: 'Auto library mode balances quality and speed.' },
    { id: 'auto-theme', name: 'Auto Theme', desc: 'Auto theme mode streamlines your flow.' },
    { id: 'auto-audio', name: 'Auto Audio', desc: 'Auto audio mode keeps content ready faster.' },
    { id: 'auto-video', name: 'Auto Video', desc: 'Auto video mode delivers smoother transitions.' },
    { id: 'auto-navigation', name: 'Auto Navigation', desc: 'Auto navigation mode boosts clarity and focus.' },
    { id: 'auto-downloads', name: 'Auto Downloads', desc: 'Auto downloads mode reduces interruptions.' },
    { id: 'auto-privacy', name: 'Auto Privacy', desc: 'Auto privacy mode adds extra control.', defaultEnabled: true },
    { id: 'auto-sync', name: 'Auto Sync', desc: 'Auto sync mode improves responsiveness.' },
    { id: 'deep-search', name: 'Deep Search', desc: 'Deep search mode prioritizes important items.' },
    { id: 'deep-launch', name: 'Deep Launch', desc: 'Deep launch mode balances quality and speed.' },
    { id: 'deep-library', name: 'Deep Library', desc: 'Deep library mode streamlines your flow.' },
    { id: 'deep-theme', name: 'Deep Theme', desc: 'Deep theme mode keeps content ready faster.', defaultEnabled: true },
    { id: 'deep-audio', name: 'Deep Audio', desc: 'Deep audio mode delivers smoother transitions.' },
    { id: 'deep-video', name: 'Deep Video', desc: 'Deep video mode boosts clarity and focus.' },
    { id: 'deep-navigation', name: 'Deep Navigation', desc: 'Deep navigation mode reduces interruptions.' },
    { id: 'deep-downloads', name: 'Deep Downloads', desc: 'Deep downloads mode adds extra control.' },
    { id: 'deep-privacy', name: 'Deep Privacy', desc: 'Deep privacy mode improves responsiveness.' },
    { id: 'deep-sync', name: 'Deep Sync', desc: 'Deep sync mode keeps things lightweight.' },
    { id: 'pro-search', name: 'Pro Search', desc: 'Pro search mode balances quality and speed.' },
    { id: 'pro-launch', name: 'Pro Launch', desc: 'Pro launch mode streamlines your flow.', defaultEnabled: true },
    { id: 'pro-library', name: 'Pro Library', desc: 'Pro library mode keeps content ready faster.' },
    { id: 'pro-theme', name: 'Pro Theme', desc: 'Pro theme mode delivers smoother transitions.' },
    { id: 'pro-audio', name: 'Pro Audio', desc: 'Pro audio mode boosts clarity and focus.' },
    { id: 'pro-video', name: 'Pro Video', desc: 'Pro video mode reduces interruptions.' },
    { id: 'pro-navigation', name: 'Pro Navigation', desc: 'Pro navigation mode adds extra control.' },
    { id: 'pro-downloads', name: 'Pro Downloads', desc: 'Pro downloads mode improves responsiveness.' },
    { id: 'pro-privacy', name: 'Pro Privacy', desc: 'Pro privacy mode keeps things lightweight.' },
    { id: 'pro-sync', name: 'Pro Sync', desc: 'Pro sync mode prioritizes important items.' }
];

if (!settings.featureFlags) {
    settings.featureFlags = {};
}

const featureDefaults = featureCatalog.reduce((acc, feature) => {
    if (feature.defaultEnabled) acc[feature.id] = true;
    return acc;
}, {});

const ensureFeatureDefaults = () => {
    let updated = false;
    featureCatalog.forEach(feature => {
        if (feature.defaultEnabled && settings.featureFlags[feature.id] === undefined) {
            settings.featureFlags[feature.id] = true;
            updated = true;
        }
    });
    if (updated) saveSettings(settings);
};

const updateFeatureCount = () => {
    const countEl = document.getElementById('features-count');
    if (!countEl) return;
    const enabledCount = featureCatalog.filter(feature => settings.featureFlags[feature.id]).length;
    countEl.textContent = `${enabledCount} of ${featureCatalog.length} features enabled`;
};

const renderFeatures = () => {
    const grid = document.getElementById('features-grid');
    if (!grid) return;
    grid.innerHTML = featureCatalog.map(feature => {
        const active = settings.featureFlags[feature.id];
        return `
            <div class="feature-card" data-feature="${feature.id}">
                <div class="feature-text">
                    <div class="feature-title">${feature.name}</div>
                    <div class="feature-desc">${feature.desc}</div>
                </div>
                <div class="toggle feature-toggle ${active ? 'active' : ''}" data-feature="${feature.id}"></div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.feature-toggle').forEach(toggle => {
        toggle.onclick = () => {
            toggle.classList.toggle('active');
            const featureId = toggle.dataset.feature;
            settings.featureFlags[featureId] = toggle.classList.contains('active');
            saveSettings(settings);
            updateFeatureCount();
        };
    });

    updateFeatureCount();
};

ensureFeatureDefaults();

// Tabs
document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.onclick = () => {
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    };
});

// Render cloaks
function renderCloaks() {
    const grid = document.getElementById('cloaks-grid');
    const allCloaks = [...(config.cloakPresets || []), ...(settings.customCloaks || [])];
    const activeCloak = settings.tabTitle || '';
    grid.innerHTML = allCloaks.map(c => {
        const isActive = c.title === activeCloak;
        return '<button class="cloak-btn ' + (isActive ? 'active' : '') + '" data-title="' + c.title + '" data-icon="' + (c.icon || '') + '">' +
            (c.icon ? '<img src="' + c.icon + '" onerror="this.style.display=\'none\'">' : '<i class="fa-solid fa-globe"></i>') +
            '<span>' + c.name + '</span></button>';
    }).join('');
    grid.querySelectorAll('.cloak-btn').forEach(btn => {
        btn.onclick = () => {
            settings.tabTitle = btn.dataset.title;
            settings.tabFavicon = btn.dataset.icon;
            saveSettings(settings);
            renderCloaks();
            // Instant update via postMessage is handled by Settings.update()
            document.title = settings.tabTitle;
        };
    });
}
renderCloaks();

// Add custom cloak
document.getElementById('add-cloak-btn').onclick = () => document.getElementById('add-cloak-form').classList.toggle('show');
document.getElementById('cancel-cloak').onclick = () => document.getElementById('add-cloak-form').classList.remove('show');
document.getElementById('save-cloak').onclick = () => {
    const name = document.getElementById('new-cloak-name').value.trim();
    const title = document.getElementById('new-cloak-title').value.trim();
    const icon = document.getElementById('new-cloak-icon').value.trim();
    if (name && title) {
        settings.customCloaks = settings.customCloaks || [];
        settings.customCloaks.push({ name, title, icon });
        saveSettings(settings);
        renderCloaks();
        document.getElementById('add-cloak-form').classList.remove('show');
        document.getElementById('new-cloak-name').value = '';
        document.getElementById('new-cloak-title').value = '';
        document.getElementById('new-cloak-icon').value = '';
    }
};

// Load values
document.getElementById('bg-color').value = settings.background?.value || '#0a0a0a';
document.getElementById('cloak-mode').value = settings.cloakMode || 'about:blank';
document.getElementById('panic-url').value = settings.panicUrl || 'https://classroom.google.com';
document.getElementById('accent-color').value = settings.accentColor || '#ffffff';
document.getElementById('surface-color').value = settings.surfaceColor || '#0f0f0f';
document.getElementById('secondary-color').value = settings.secondaryColor || '#2e2e33';
document.getElementById('text-color').value = settings.textColor || '#e4e4e7';
document.getElementById('text-secondary-color').value = settings.textSecondaryColor || '#71717a';
document.getElementById('text-dim-color').value = settings.textDimColor || '#52525b';
document.getElementById('surface-hover-color').value = settings.surfaceHoverColor || '#1a1a1a';
document.getElementById('surface-active-color').value = settings.surfaceActiveColor || '#252525';
document.getElementById('border-color').value = settings.borderColor || '#1f1f1f';
document.getElementById('border-light-color').value = settings.borderLightColor || '#2a2a2a';

document.getElementById('max-rating').value = settings.maxMovieRating || 'R';
document.getElementById('game-library').value = settings.gameLibrary || 'multi';

// Background Presets
function renderBackgrounds() {
    const grid = document.getElementById('backgrounds-grid');
    if (!grid) return;

    const bgPresets = window.SITE_CONFIG?.backgroundPresets || [];
    const currentBg = settings.customBackground;
    const currentBgId = currentBg?.id || (currentBg?.url ? 'custom' : 'none');

    const customBgs = settings.customBackgrounds || [];
    const allBgs = [...bgPresets, ...customBgs];

    grid.innerHTML = allBgs.map(bg => {
        const isActive = bg.id === currentBgId || (bg.id === 'custom' && bg.url === currentBg?.url);
        let preview = '';
        if (bg.type === 'youtube') {
            const ytId = bg.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)?.[1];
            preview = ytId ? `<img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" style="width:100%; height:100%; object-fit:cover;">` : '';
        } else if (bg.type === 'video') {
            preview = `<video src="${bg.url}" muted loop playsinline volume="0" style="width:100%; height:100%; object-fit:cover;"></video>`;
        } else if (bg.type === 'image') {
            preview = `<img src="${bg.url}" style="width:100%; height:100%; object-fit:cover;">`;
        } else {
            preview = `<div style="width:100%; height:100%; background:linear-gradient(45deg, var(--surface), var(--surface-hover)); display:flex; align-items:center; justify-content:center; color:var(--text-dim);"><i class="fa-solid fa-ban" style="font-size: 2.5rem; opacity: 0.5;"></i></div>`;
        }

        const isDeletable = customBgs.some(cb => cb.url === bg.url);

        return `
            <button class="bg-preset-btn ${isActive ? 'active' : ''}" data-id="${bg.id}" data-url="${bg.url || ''}">
                <div class="bg-preset-preview">${preview}</div>
                <div class="bg-preset-name">${bg.name}</div>
                ${(bg.type === 'video' || bg.type === 'youtube') ? '<div class="bg-preset-badge"><i class="fa-solid fa-play"></i></div>' : ''}
                ${isDeletable ? `<div class="bg-preset-delete" data-url="${bg.url}"><i class="fa-solid fa-trash"></i></div>` : ''}
            </button>
        `;
    }).join('');

    grid.querySelectorAll('.bg-preset-btn').forEach(btn => {
        btn.onclick = (e) => {
            // Don't trigger if clicking delete
            if (e.target.closest('.bg-preset-delete')) return;

            const bgId = btn.dataset.id;
            const bgUrl = btn.dataset.url;

            if (bgId === 'none') {
                settings.customBackground = { id: 'none', type: 'none' };
                if (window.Notify) Notify.success('Background Removed', 'Reverted to theme default');
            } else {
                const bg = allBgs.find(b => (bgId !== 'custom' && b.id === bgId) || (bgId === 'custom' && b.url === bgUrl));
                settings.customBackground = bg;
                if (window.Notify) Notify.success('Background Applied', `Switched to ${bg.name}`);
            }

            saveSettings(settings);
            renderBackgrounds();

            // Clear custom input when selecting preset
            const urlInput = document.getElementById('custom-bg-url');
            if (urlInput) urlInput.value = '';
        };

        // Deletion handler
        const deleteBtn = btn.querySelector('.bg-preset-delete');
        if (deleteBtn) {
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                const url = deleteBtn.dataset.url;
                settings.customBackgrounds = (settings.customBackgrounds || []).filter(bg => bg.url !== url);

                // If active, remove it
                if (settings.customBackground?.url === url) {
                    settings.customBackground = { id: 'none', type: 'none' };
                }

                saveSettings(settings);
                renderBackgrounds();
                if (window.Notify) Notify.success('Deleted', 'Custom background removed');
            };
        }

        // Play video on hover
        const video = btn.querySelector('video');
        if (video) {
            btn.onmouseenter = () => {
                video.muted = true;
                video.volume = 0;
                video.play().catch(() => { }); // Ignore play promise rejection
            };
            btn.onmouseleave = () => {
                video.pause();
                video.currentTime = 0;
            };
        }
    });
}
renderBackgrounds();

renderFeatures();

const enableAllFeaturesBtn = document.getElementById('features-enable-all');
if (enableAllFeaturesBtn) {
    enableAllFeaturesBtn.onclick = () => {
        featureCatalog.forEach(feature => {
            settings.featureFlags[feature.id] = true;
        });
        saveSettings(settings);
        renderFeatures();
    };
}

const disableAllFeaturesBtn = document.getElementById('features-disable-all');
if (disableAllFeaturesBtn) {
    disableAllFeaturesBtn.onclick = () => {
        featureCatalog.forEach(feature => {
            settings.featureFlags[feature.id] = false;
        });
        saveSettings(settings);
        renderFeatures();
    };
}

const resetFeaturesBtn = document.getElementById('features-reset');
if (resetFeaturesBtn) {
    resetFeaturesBtn.onclick = () => {
        settings.featureFlags = { ...featureDefaults };
        saveSettings(settings);
        renderFeatures();
    };
}

// Custom Background Handler
const applyCustomBgBtn = document.getElementById('apply-custom-bg');
if (applyCustomBgBtn) {
    applyCustomBgBtn.onclick = () => {
        const urlInput = document.getElementById('custom-bg-url');
        const url = urlInput?.value?.trim();

        if (!url) {
            if (window.Notify) Notify.error('Error', 'Please enter a URL');
            return;
        }

        // Auto-detect type
        let type = 'image';
        const urlLower = url.toLowerCase();
        if (urlLower.match(/\.(mp4|webm|ogg|mov|m4v)$/)) {
            type = 'video';
        } else if (urlLower.match(/(youtube\.com|youtu\.be)/)) {
            type = 'youtube';
        } else if (urlLower.includes('video') || urlLower.includes('stream')) {
            // Heuristic for some video providers
            type = 'video';
        }

        // Get object-position from input if provided
        const objectPositionInput = document.getElementById('custom-bg-position');
        const objectPosition = objectPositionInput?.value?.trim() || null;

        // Create custom background object
        const newBg = {
            id: 'custom',
            name: 'Custom',
            type: type,
            url: url,
            overlay: 0.3,
            objectPosition: objectPosition
        };

        settings.customBackgrounds = settings.customBackgrounds || [];
        // Prevent duplicates
        if (!settings.customBackgrounds.some(b => b.url === url)) {
            settings.customBackgrounds.push(newBg);
        }

        settings.customBackground = newBg;
        saveSettings(settings);
        renderBackgrounds();
        if (window.Notify) Notify.success('Custom Background Added', 'Background saved to your library');
        urlInput.value = '';
    };
}

// Theme Presets - use from config.js
const presets = window.SITE_CONFIG?.themePresets || {};

const presetsContainer = document.getElementById('themes-grid');
if (presetsContainer) {
    Object.entries(presets).forEach(([key, theme]) => {
        const btn = document.createElement('button');
        btn.className = 'cloak-btn'; /* Reuse styling */
        btn.style.alignItems = 'flex-start';
        btn.style.padding = '12px';
        btn.innerHTML = `
                    <div style="width:100%; height:24px; background:${theme.bg.value}; border-radius:4px; margin-bottom:8px; border:1px solid var(--border)"></div>
                    <span style="font-weight:600">${theme.name}</span>
                `;
        btn.onclick = () => {
            settings.background = theme.bg;
            settings.surfaceColor = theme.surface;
            settings.surfaceHoverColor = theme.surfaceHover;
            settings.surfaceActiveColor = theme.surfaceActive;
            settings.secondaryColor = theme.secondary;
            settings.borderColor = theme.border;
            settings.borderLightColor = theme.borderLight;
            settings.textColor = theme.text;
            settings.textSecondaryColor = theme.textSec;
            settings.textDimColor = theme.textDim;
            settings.accentColor = theme.accent;
            saveSettings(settings); // This triggers Settings.apply() automatically

            // Update inputs
            document.getElementById('bg-color').value = theme.bg.value;
            document.getElementById('accent-color').value = theme.accent;
            document.getElementById('surface-color').value = theme.surface;
            document.getElementById('secondary-color').value = theme.secondary;
            document.getElementById('text-color').value = theme.text;
            document.getElementById('text-secondary-color').value = theme.textSec;
            document.getElementById('text-dim-color').value = theme.textDim;
            document.getElementById('surface-hover-color').value = theme.surfaceHover;
            document.getElementById('surface-active-color').value = theme.surfaceActive;
            document.getElementById('border-color').value = theme.border;
            document.getElementById('border-light-color').value = theme.borderLight;
            if (window.Notify) {
                Notify.success('Theme Applied', `Switched to ${theme.name} theme`);
            } else {
                alert('Theme "' + theme.name + '" applied!');
            }
        };
        presetsContainer.appendChild(btn);
    });
}


const mods = settings.panicModifiers || window.SITE_CONFIG?.defaults?.panicModifiers || ['ctrl', 'shift'];
const key = settings.panicKey || window.SITE_CONFIG?.defaults?.panicKey || 'x';
document.getElementById('panic-key').textContent = mods.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' + ') + ' + ' + key;

if (settings.miniplayer !== false) document.getElementById('miniplayer-toggle').classList.add('active');
else document.getElementById('miniplayer-toggle').classList.remove('active');
if (settings.leaveConfirmation) document.getElementById('leave-confirm-toggle').classList.add('active');
if (settings.showChangelogOnUpdate !== false) document.getElementById('changelog-toggle').classList.add('active');
else document.getElementById('changelog-toggle').classList.remove('active');
if (settings.themeRotation) document.getElementById('theme-rotation-toggle').classList.add('active');
else document.getElementById('theme-rotation-toggle').classList.remove('active');
if (settings.autoSwitchProviders !== false) document.getElementById('autoswitch-toggle').classList.add('active');
else document.getElementById('autoswitch-toggle').classList.remove('active');
if (settings.backgroundRotation) document.getElementById('background-rotation-toggle').classList.add('active');
else document.getElementById('background-rotation-toggle').classList.remove('active');
if (settings.fogBackground) document.getElementById('fog-toggle').classList.add('active');
else document.getElementById('fog-toggle').classList.remove('active');
if (settings.reduceBlur) document.getElementById('reduce-blur-toggle').classList.add('active');
else document.getElementById('reduce-blur-toggle').classList.remove('active');

// Rotating Cloaks
if (settings.rotateCloaks) {
    document.getElementById('rotate-toggle').classList.add('active');
    document.getElementById('rotate-interval-row').style.display = 'flex';
}
document.getElementById('rotate-interval').value = settings.rotateInterval || 5;

// Save handlers
document.getElementById('cloak-mode').onchange = e => { settings.cloakMode = e.target.value; saveSettings(settings); };

document.getElementById('bg-color').oninput = e => {
    settings.background = { type: 'color', value: e.target.value };
    saveSettings(settings);
};
document.getElementById('panic-url').oninput = e => { settings.panicUrl = e.target.value; saveSettings(settings); };
document.getElementById('accent-color').oninput = e => { settings.accentColor = e.target.value; saveSettings(settings); };
document.getElementById('surface-color').oninput = e => { settings.surfaceColor = e.target.value; saveSettings(settings); };
document.getElementById('secondary-color').oninput = e => { settings.secondaryColor = e.target.value; saveSettings(settings); };
document.getElementById('text-color').oninput = e => { settings.textColor = e.target.value; saveSettings(settings); };
document.getElementById('text-secondary-color').oninput = e => { settings.textSecondaryColor = e.target.value; saveSettings(settings); };
document.getElementById('text-dim-color').oninput = e => { settings.textDimColor = e.target.value; saveSettings(settings); };
document.getElementById('surface-hover-color').oninput = e => { settings.surfaceHoverColor = e.target.value; saveSettings(settings); };
document.getElementById('surface-active-color').oninput = e => { settings.surfaceActiveColor = e.target.value; saveSettings(settings); };
document.getElementById('border-color').oninput = e => { settings.borderColor = e.target.value; saveSettings(settings); };
document.getElementById('border-light-color').oninput = e => { settings.borderLightColor = e.target.value; saveSettings(settings); };
document.getElementById('max-rating').onchange = e => { settings.maxMovieRating = e.target.value; saveSettings(settings); };
document.getElementById('game-library').onchange = e => { settings.gameLibrary = e.target.value; saveSettings(settings); };
document.getElementById('miniplayer-toggle').onclick = function () { this.classList.toggle('active'); settings.miniplayer = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('leave-confirm-toggle').onclick = function () { this.classList.toggle('active'); settings.leaveConfirmation = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('changelog-toggle').onclick = function () { this.classList.toggle('active'); settings.showChangelogOnUpdate = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('theme-rotation-toggle').onclick = function () { this.classList.toggle('active'); settings.themeRotation = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('autoswitch-toggle').onclick = function () { this.classList.toggle('active'); settings.autoSwitchProviders = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('background-rotation-toggle').onclick = function () { this.classList.toggle('active'); settings.backgroundRotation = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('fog-toggle').onclick = function () { this.classList.toggle('active'); settings.fogBackground = this.classList.contains('active'); saveSettings(settings); };
document.getElementById('reduce-blur-toggle').onclick = function () { this.classList.toggle('active'); settings.reduceBlur = this.classList.contains('active'); saveSettings(settings); };

document.getElementById('rotate-toggle').onclick = function () {
    this.classList.toggle('active');
    settings.rotateCloaks = this.classList.contains('active');
    document.getElementById('rotate-interval-row').style.display = settings.rotateCloaks ? 'flex' : 'none';
    saveSettings(settings);
};
document.getElementById('rotate-interval').onchange = e => {
    let val = parseFloat(e.target.value);
    if (val < 0.1) val = 0.1;
    if (val > 30) val = 30;
    settings.rotateInterval = val;
    saveSettings(settings);
};

// Panic key
let capturing = false;
const panicKeyBtn = document.getElementById('panic-key');
panicKeyBtn.onclick = () => { capturing = true; panicKeyBtn.classList.add('capturing'); panicKeyBtn.textContent = 'Press keys...'; };
document.addEventListener('keydown', e => {
    if (!capturing) return;
    e.preventDefault();
    const m = [];
    if (e.ctrlKey) m.push('ctrl');
    if (e.shiftKey) m.push('shift');
    if (e.altKey) m.push('alt');
    const k = e.key;
    if (!['Control', 'Shift', 'Alt', 'Meta'].includes(k)) {
        capturing = false;
        panicKeyBtn.classList.remove('capturing');
        panicKeyBtn.textContent = m.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' + ') + (m.length ? ' + ' : '') + k;
        settings.panicKey = k;
        settings.panicModifiers = m;
        saveSettings(settings);
    }
});

document.getElementById('clear-cache').onclick = async () => {
    if (!confirm('Clear all cached data? This will unregister service workers and clear secondary storage.')) return;

    // 1. Clear Cache Storage
    if ('caches' in window) {
        try {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
        } catch (e) { console.error('Cache clear error:', e); }
    }

    // 2. Clear IndexedDB (used by proxies and games)
    if ('indexedDB' in window) {
        try {
            if (indexedDB.databases) {
                const dbs = await indexedDB.databases();
                for (const db of dbs) {
                    if (db.name) indexedDB.deleteDatabase(db.name);
                }
            } else {
                ['scramjet-data', 'scrambase', 'ScramjetData', 'uv-data'].forEach(name => indexedDB.deleteDatabase(name));
            }
        } catch (e) { console.error('IDB clear error:', e); }
    }

    // 3. Unregister Service Workers
    if ('serviceWorker' in navigator) {
        try {
            const regs = await navigator.serviceWorker.getRegistrations();
            for (const reg of regs) {
                await reg.unregister();
            }
        } catch (e) { console.error('SW unregister error:', e); }
    }

    if (window.Notify) Notify.success('Success', 'Cache cleared! Reloading...');
    else alert('Cache cleared successfully! Reloading...');

    setTimeout(() => location.reload(), 1000);
};
document.getElementById('reset-settings').onclick = () => {
    if (!confirm('Reset all settings?')) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
};

const exportCookiesBtn = document.getElementById('export-cookies');
const importCookiesBtn = document.getElementById('import-cookies');
const importCookiesInput = document.getElementById('import-cookies-input');

const parseCookies = () => {
    if (!document.cookie) return [];
    return document.cookie.split('; ').map(pair => {
        const idx = pair.indexOf('=');
        const name = idx >= 0 ? pair.slice(0, idx) : pair;
        const value = idx >= 0 ? pair.slice(idx + 1) : '';
        return { name, value, path: '/', sameSite: 'Lax' };
    });
};

const serializeCookie = (cookie) => {
    const parts = [`${cookie.name}=${cookie.value}`];
    if (cookie.path) parts.push(`path=${cookie.path}`);
    if (cookie.domain) parts.push(`domain=${cookie.domain}`);
    if (cookie.expires) parts.push(`expires=${cookie.expires}`);
    if (cookie.maxAge) parts.push(`max-age=${cookie.maxAge}`);
    if (cookie.sameSite) parts.push(`samesite=${cookie.sameSite}`);
    if (cookie.secure) parts.push('secure');
    return parts.join('; ');
};

const arrayBufferToBase64 = (buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
};

if (exportCookiesBtn) {
    exportCookiesBtn.onclick = async () => {
        const localData = {};
        const sessionData = {};
        for (let i = 0; i < localStorage.length; i += 1) {
            const key = localStorage.key(i);
            if (key) localData[key] = localStorage.getItem(key);
        }
        for (let i = 0; i < sessionStorage.length; i += 1) {
            const key = sessionStorage.key(i);
            if (key) sessionData[key] = sessionStorage.getItem(key);
        }

        const dbList = indexedDB.databases ? await indexedDB.databases() : [];
        const indexedData = [];

        const openDb = (name) => new Promise((resolve, reject) => {
            const request = indexedDB.open(name);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        const readStore = (db, storeName) => new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const info = {
                name: storeName,
                keyPath: store.keyPath,
                autoIncrement: store.autoIncrement,
                indexes: Array.from(store.indexNames).map(indexName => {
                    const index = store.index(indexName);
                    return { name: indexName, keyPath: index.keyPath, unique: index.unique, multiEntry: index.multiEntry };
                })
            };
            const dataRequest = store.getAll();
            const keyRequest = store.getAllKeys();
            Promise.all([
                new Promise(res => { dataRequest.onsuccess = () => res(dataRequest.result || []); dataRequest.onerror = () => res([]); }),
                new Promise(res => { keyRequest.onsuccess = () => res(keyRequest.result || []); keyRequest.onerror = () => res([]); })
            ]).then(([values, keys]) => {
                const records = values.map((value, idx) => ({ key: keys[idx], value }));
                resolve({ ...info, records });
            });
        });

        for (const dbInfo of dbList) {
            if (!dbInfo.name) continue;
            try {
                const db = await openDb(dbInfo.name);
                const stores = [];
                for (const storeName of db.objectStoreNames) {
                    const storeData = await readStore(db, storeName);
                    stores.push(storeData);
                }
                indexedData.push({ name: dbInfo.name, version: db.version, stores });
                db.close();
            } catch (e) {
                indexedData.push({ name: dbInfo.name, version: dbInfo.version || 1, stores: [] });
            }
        }

        const cachesData = [];
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (const cacheName of cacheNames) {
                const cache = await caches.open(cacheName);
                const requests = await cache.keys();
                const entries = [];
                for (const request of requests) {
                    const response = await cache.match(request);
                    if (!response) continue;
                    const buffer = await response.arrayBuffer();
                    const base64 = arrayBufferToBase64(buffer);
                    const headers = {};
                    response.headers.forEach((value, key) => { headers[key] = value; });
                    entries.push({
                        url: request.url,
                        method: request.method || 'GET',
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                        body: base64
                    });
                }
                cachesData.push({ name: cacheName, entries });
            }
        }

        const payload = {
            version: 2,
            exportedAt: new Date().toISOString(),
            cookies: parseCookies(),
            localStorage: localData,
            sessionStorage: sessionData,
            indexedDB: indexedData,
            cacheStorage: cachesData,
            fileSystemAccess: false
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lcc-data.lcc';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        if (window.Notify) Notify.success('Data Exported', 'Download started.');
    };
}

if (importCookiesBtn && importCookiesInput) {
    importCookiesBtn.onclick = () => importCookiesInput.click();
    importCookiesInput.onchange = async () => {
        const file = importCookiesInput.files?.[0];
        if (!file) return;
        try {
            const text = await file.text();
            const data = JSON.parse(text);
            const cookies = Array.isArray(data) ? data : data.cookies;
            if (!Array.isArray(cookies)) throw new Error('Invalid cookie file');
            cookies.forEach(cookie => {
                if (!cookie.name) return;
                document.cookie = serializeCookie(cookie);
            });
            if (data.localStorage) {
                Object.entries(data.localStorage).forEach(([key, value]) => {
                    localStorage.setItem(key, value);
                });
            }
            if (data.sessionStorage) {
                Object.entries(data.sessionStorage).forEach(([key, value]) => {
                    sessionStorage.setItem(key, value);
                });
            }
            if (data.indexedDB && indexedDB.databases) {
                for (const dbInfo of data.indexedDB) {
                    if (!dbInfo.name) continue;
                    await new Promise(res => {
                        const req = indexedDB.deleteDatabase(dbInfo.name);
                        req.onsuccess = () => res();
                        req.onerror = () => res();
                        req.onblocked = () => res();
                    });
                    await new Promise((resolve, reject) => {
                        const request = indexedDB.open(dbInfo.name, dbInfo.version || 1);
                        request.onupgradeneeded = () => {
                            const db = request.result;
                            dbInfo.stores.forEach(storeInfo => {
                                if (db.objectStoreNames.contains(storeInfo.name)) return;
                                const store = db.createObjectStore(storeInfo.name, {
                                    keyPath: storeInfo.keyPath || undefined,
                                    autoIncrement: storeInfo.autoIncrement
                                });
                                (storeInfo.indexes || []).forEach(index => {
                                    store.createIndex(index.name, index.keyPath, { unique: index.unique, multiEntry: index.multiEntry });
                                });
                            });
                        };
                        request.onsuccess = () => {
                            const db = request.result;
                            dbInfo.stores.forEach(storeInfo => {
                                if (!db.objectStoreNames.contains(storeInfo.name)) return;
                                const tx = db.transaction(storeInfo.name, 'readwrite');
                                const store = tx.objectStore(storeInfo.name);
                                (storeInfo.records || []).forEach(record => {
                                    if (record.key !== undefined) store.put(record.value, record.key);
                                    else store.put(record.value);
                                });
                            });
                            db.close();
                            resolve();
                        };
                        request.onerror = () => reject(request.error);
                    });
                }
            }
            if (data.cacheStorage && 'caches' in window) {
                for (const cacheInfo of data.cacheStorage) {
                    const cache = await caches.open(cacheInfo.name);
                    for (const entry of cacheInfo.entries || []) {
                        const binary = Uint8Array.from(atob(entry.body || ''), c => c.charCodeAt(0));
                        const response = new Response(binary, {
                            status: entry.status,
                            statusText: entry.statusText,
                            headers: entry.headers
                        });
                        await cache.put(entry.url, response);
                    }
                }
            }
            if (window.Notify) Notify.success('Data Imported', 'Data restored to this site.');
        } catch (e) {
            console.error(e);
            if (window.Notify) Notify.error('Import Failed', 'Unable to read data file.');
        } finally {
            importCookiesInput.value = '';
        }
    };
}
