document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeBtn = document.getElementById('theme-btn');
    const resultsContainer = document.getElementById('lotto-results-container');
    const body = document.body;

    // 테마 토글 로직
    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            themeBtn.textContent = '🌙 다크 모드';
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            themeBtn.textContent = '☀️ 라이트 모드';
        }
    });

    function getColorClass(number) {
        if (number <= 10) return 'color-1';
        if (number <= 20) return 'color-2';
        if (number <= 30) return 'color-3';
        if (number <= 40) return 'color-4';
        return 'color-5';
    }

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers.sort((a, b) => a - b);
    }

    function createRow(index, numbers) {
        const row = document.createElement('div');
        row.className = 'lotto-row';
        row.style.animationDelay = `${index * 0.1}s`;

        const label = document.createElement('span');
        label.className = 'row-label';
        label.textContent = String.fromCharCode(65 + index); // A, B, C, D, E
        row.appendChild(label);

        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = `ball ${getColorClass(num)}`;
            ball.textContent = num;
            row.appendChild(ball);
        });

        return row;
    }

    generateBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = '';
        generateBtn.disabled = true;
        generateBtn.textContent = '행운을 불러오는 중...';

        for (let i = 0; i < 5; i++) {
            const numbers = generateLottoNumbers();
            const row = createRow(i, numbers);
            resultsContainer.appendChild(row);
        }

        setTimeout(() => {
            generateBtn.disabled = false;
            generateBtn.textContent = '번호 5개 세트 다시 생성';
        }, 600);
    });
});
