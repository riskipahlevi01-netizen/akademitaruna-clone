(function () {
    // Global page view and session tracking for UAEL Modal Popup feature
    try {
        // Session tracking: increment if this is a new session

        // Check if any popup on this page uses current page tracking
        var hasCurrentPageTracking = false;
        var currentPagePopups = [];
        // Check all modal popups on this page for current page tracking
        if (typeof jQuery !== 'undefined') {
            jQuery('.uael-modal-parent-wrapper').each(function () {
                var scope = jQuery(this).data('page-views-scope');
                var enabled = jQuery(this).data('page-views-enabled');
                var popupId = jQuery(this).attr('id').replace('-overlay', '');
                if (enabled === 'yes' && scope === 'current') {
                    hasCurrentPageTracking = true;
                    currentPagePopups.push(popupId);
                }
            });
        }
        // Global tracking: ALWAYS increment if ANY popup on the site uses global tracking
        // Current page tracking: increment per-page counters
        if (hasCurrentPageTracking && currentPagePopups.length > 0) {
            var currentUrl = window.location.href;
            var urlKey = 'uael_page_views_' + btoa(currentUrl).replace(/[^a-zA-Z0-9]/g, '').substring(0, 50);
            var currentPageViews = parseInt(localStorage.getItem(urlKey) || '0');
            currentPageViews++;
            localStorage.setItem(urlKey, currentPageViews.toString());
            // Store URL mapping for each popup
            for (var i = 0; i < currentPagePopups.length; i++) {
                var popupUrlKey = 'uael_popup_' + currentPagePopups[i] + '_url_key';
                localStorage.setItem(popupUrlKey, urlKey);
            }
        }
    } catch (e) {
        // Silently fail if localStorage is not available
    }
})();
