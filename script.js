        const codeInput = document.getElementById('code-input');
        const highlightedCode = document.getElementById('highlighted-code');
        const body = document.body;

        function syntaxHighlight(code) {
            const keywords = /\b(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)\b/g;
            const strings = /(['"])(?:(?!\1|\\).|\\.)*\1/g;
            const numbers = /\b\d+(\.\d+)?\b/g;
            const comments = /(\/\/.*|\/\*[\s\S]*?\*\/)/g;

            return code
                .replace(comments, '<span style="color: #6a9955;">$&</span>')
                .replace(strings, '<span style="color: #ce9178;">$&</span>')
                .replace(keywords, '<span style="color: #569cd6;">$&</span>')
                .replace(numbers, '<span style="color: #b5cea8;">$&</span>');
        }

        codeInput.addEventListener('input', () => {
            highlightedCode.innerHTML = syntaxHighlight(codeInput.value);
        });

        function copyToClipboard() {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.style.position = 'absolute';
            tempTextarea.style.left = '-9999px';
            tempTextarea.value = highlightedCode.innerHTML
                .replace(/<span.*?>/g, '')
                .replace(/<\/span>/g, '');
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            alert('Code copied to clipboard! You can now paste it into Word.');
        }

        function toggleTheme() {
            if (body.style.backgroundColor === 'white') {
                body.style.backgroundColor = '#282c34';
                body.style.color = '#abb2bf';
                highlightedCode.style.backgroundColor = '#282c34';
                highlightedCode.style.color = '#abb2bf';
            } else {
                body.style.backgroundColor = 'white';
                body.style.color = '#333';
                highlightedCode.style.backgroundColor = '#f4f4f9';
                highlightedCode.style.color = '#333';
            }
        }
    