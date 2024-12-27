const box = document.querySelector('.box');
const circle = document.querySelector('.circle');

// Box animation
box.addEventListener('click', () => {
  const keyframes = [
    { transform: 'scale(1)', backgroundColor: '#3498db' },
    { transform: 'scale(1.5)', backgroundColor: '#2ecc71' },
    { transform: 'scale(1)', backgroundColor: '#3498db' }
  ];

  const options = {
    duration: 1000,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    iterations: 1
  };

  box.animate(keyframes, options);
});

// Circle continuous animation
const circleKeyframes = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(80vh)' },
  { transform: 'translateY(0)' }
];

const circleOptions = {
  duration: 2000,
  easing: 'ease-in-out',
  iterations: Infinity
};

circle.animate(circleKeyframes, circleOptions);