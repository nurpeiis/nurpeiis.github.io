"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        const details = job.querySelector('ul');
        if (details) {
            details.style.display = 'none';
            job.addEventListener('click', () => {
                if (details.style.display === 'none') {
                    details.style.display = 'block';
                }
                else {
                    details.style.display = 'none';
                }
            });
        }
    });
});
