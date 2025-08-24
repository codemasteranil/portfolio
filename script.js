
// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', function(e) {
		const targetId = this.getAttribute('href');
		const targetSection = document.querySelector(targetId);
		if (targetSection) {
			e.preventDefault();
			targetSection.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Contact form submission (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	// Simulate sending message
	document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
	this.reset();
});
// Animation on scroll using Intersection Observer
function animateOnScroll() {
	const animatedEls = document.querySelectorAll('.fade-in, .slide-down, .pop-in');
	const observer = new window.IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.animationPlayState = 'running';
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });
	animatedEls.forEach(el => {
		// Pause animation until in view
		el.style.animationPlayState = 'paused';
		observer.observe(el);
	});
}
window.addEventListener('DOMContentLoaded', animateOnScroll);
