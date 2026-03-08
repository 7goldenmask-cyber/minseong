document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const ballContainer = document.getElementById('lotto-numbers');

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

    function updateDisplay(numbers) {
        ballContainer.innerHTML = '';
        
        numbers.forEach((num, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = `ball ${getColorClass(num)}`;
                ball.textContent = num;
                ball.style.animationDelay = `${index * 0.1}s`;
                ballContainer.appendChild(ball);
            }, index * 100);
        });
    }

    generateBtn.addEventListener('click', () => {
        // 버튼 비활성화 (애니메이션 중 중복 클릭 방지)
        generateBtn.disabled = true;
        generateBtn.textContent = '번호 추출 중...';

        const numbers = generateLottoNumbers();
        updateDisplay(numbers);

        setTimeout(() => {
            generateBtn.disabled = false;
            generateBtn.textContent = '번호 다시 생성하기';
        }, 1000);
    });
});
