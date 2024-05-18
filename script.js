window.onload = function() {
    const markdownInput = document.getElementById('markdown');
    const preview = document.getElementById('preview');

    function updatePreview() {
        const markdownText = markdownInput.value;
        preview.innerHTML = marked(markdownText);
    }

    markdownInput.addEventListener('input', updatePreview);
};

// Include the marked library for Markdown parsing
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.onload = function() {
        marked.setOptions({
            breaks: true
        });
    };
    document.head.appendChild(script);
})();
