// HOPE Anti-Debugging & DOM Protection Engine
// This script intercepts casual F12/Inspect attempts to protect IP and UX.

(function () {
    // 1. Block Right-Click Context Menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // 2. Block Common Keyboard DevTools Shortcuts
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
        }
        // Ctrl+Shift+C (Element Selection)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
        }
    });

    // 3. Infinite Debugger Trap (If they bypass the keyboard blocks via browser menu)
    // This loop forces the browser to freeze on the 'debugger' statement if DevTools is open.
    setInterval(function () {
        const t0 = performance.now();
        debugger;
        const t1 = performance.now();
        // If it took more than 100ms to execute an empty line, DevTools caught the debugger trap.
        if (t1 - t0 > 100) {
            // Optional: You can redirect or wipe the page here.
            document.body.innerHTML = "<div style='display:flex; height:100vh; width:100vw; justify-content:center; align-items:center; background:#000; color:#ef4444; font-size:2rem; font-family:monospace;'>SECURITY_VIOLATION: Inspection Disabled</div>";
        }
    }, 1000);
})();
