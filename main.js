const emailIcon = document.querySelector('.email-icon');
emailIcon.addEventListener('click', () => {
	const aler = document.querySelector('.alert');
	aler.style.display = 'block';
})

const clsBtn = document.querySelector('.cls-btn');
clsBtn.addEventListener('click', () => {
	const aler = document.querySelector('.alert');
	aler.style.display = 'none';	
})


const whatsApp = document.querySelector('.whatsapp-icon');
var whatsAlert = document.querySelector('.whats-app-alert');
whatsApp.addEventListener('click', () => {
	whatsAlert.style.display = 'block';
})

const whatsClsBtn = document.querySelector('.whats-cls-btn');
whatsClsBtn.addEventListener('click', () => {
	whatsAlert.style.display = 'none';	
})


const mySkills = document.querySelector('.skills-section');

const optionsSkillSection = {
	threshold: 0.2
} 

const callbackSkillSection = (entries1, observer) => {
	    	entries1.forEach((entry1) => {
	    		if(!entry1.isIntersecting) {
	    			return;
	    		};
	    		const progress = document.querySelectorAll('.progress-done');

	    		setTimeout(() => {
	    			for(var i = 0; i<progress.length; i++) {
	    				progress[i].style.width = progress[i].getAttribute('date-done') + '%';
	    				progress[i].style.opacity = '1';   
	    			}

	    		}, 500);
	    		
	    	})
	    } 

const obserberSkillSection = new
IntersectionObserver(callbackSkillSection, optionsSkillSection);
obserberSkillSection.observe(mySkills);


const links = document.querySelectorAll('.scroll-to');
links.forEach((item) => {
	item.addEventListener('click', () => {
		const elmt = document.getElementById(item.getAttribute("data-link"));
		elmt.scrollIntoView({behavior: 'smooth', block: 'start'});
	});
});


const icon = document.querySelector('.bookmark');
icon.addEventListener('click', () => {
	const home = document.querySelector('.top-page');
	home.scrollIntoView({behavior: 'smooth', block: 'center'});
});

var home = document.querySelector('.home');
var skills = document.querySelector('.skills');
var project = document.querySelector('.project');
var contact = document.querySelector('.contact');
var resume = document.querySelector('.resume');

var homeSection = document.querySelector('.home-section');
homeSection.addEventListener('mouseenter', () => {
	home.style.color = '#0B5ED7';
	home.style.borderBottom = '2px solid #42BA96';
});

var homeSection = document.querySelector('.home-section');
homeSection.addEventListener('mouseleave', () => {
	home.style.color = '#666666';
	home.style.borderBottom = 'none';
});

var projectSection = document.querySelector('.project-section');
projectSection.addEventListener('mouseenter', () => {
	project.style.color = '#0B5ED7';
	project.style.borderBottom = '2px solid #42BA96';
});

projectSection.addEventListener('mouseleave', () => {
	project.style.color = '#666666';
	project.style.borderBottom = 'none';
});

var skillSection00 = document.querySelector('.skills-section');
skillSection00.addEventListener('mouseenter', () => {
	skills.style.color = '#0B5ED7';
	skills.style.borderBottom = '2px solid #42BA96';
});

skillSection00.addEventListener('mouseleave', () => {
	skills.style.color = '#666666';
	skills.style.borderBottom = 'none';
});

var contactSection = document.querySelector('.contact-section');
contactSection.addEventListener('mouseenter', () => {
	contact.style.color = '#0B5ED7';
	contact.style.borderBottom = '2px solid #42BA96';
});

contactSection.addEventListener('mouseleave', () => {
	contact.style.color = '#666666';
	contact.style.borderBottom = 'none';
});

// for project-section style

const allRow1 = document.querySelector('.all-row1');

const proSecOpts = {
	threshold: 0.2
}

const proSecCallback = (entries2) => {
	entries2.forEach((entry2) => {
		if(!entry2.isIntersecting) {
			return;
		};

		
		let hotel = document.querySelector(".hotel");
		hotel.classList.toggle('forallstyle1');

		let ana = document.querySelector(".ana");
		ana.classList.toggle('forallstyle2');

		observer2.unobserve(allRow1);

	})
}
const observer2 = new IntersectionObserver(proSecCallback, proSecOpts);
observer2.observe(allRow1);



const allRow2 = document.querySelector('.all-row2');

const proSecOpts2 = {
	threshold: 0.2
}

const proSecCallback2 = (entries2) => {
	entries2.forEach((entry2) => {
		if(!entry2.isIntersecting) {
			return;
		};

		
		let cv = document.querySelector(".cv");
		cv.classList.toggle('forallstyle1');

		let team = document.querySelector(".team");
		team.classList.toggle('forallstyle2');

		observer3.unobserve(allRow2);

	})
}
const observer3 = new IntersectionObserver(proSecCallback2, proSecOpts2);
observer3.observe(allRow2);



const allRow3 = document.querySelector('.all-row3');

const proSecOpts3 = {
	threshold: 0.2
}

const proSecCallback3 = (entries2) => {
	entries2.forEach((entry2) => {
		if(!entry2.isIntersecting) {
			return;
		};

		
		let landKit = document.querySelector(".landkit");
		landKit.classList.toggle('forallstyle1');

		let clock = document.querySelector(".clock");
		clock.classList.toggle('forallstyle2');

		observer4.unobserve(allRow3);

	})
}
const observer4 = new IntersectionObserver(proSecCallback3, proSecOpts3);
observer4.observe(allRow3);


// type writer

var Signicon = `<i class="fa fa-angle-double-right"></i>`;

const forTypeWrite = document.querySelector('#section3');

const typeWriteOps = {
	threshold: 0.1
}

const typeWriteCallback = (type) => {
	type.forEach((entry2) => {
		if(!entry2.isIntersecting) {
			return;
		};

		const texts = 
		[`* All those projects below along with my portfolio made by Vanila Javascript.`];
		let count = 0;
		let index = 0;
		let letter = '';

		(function type() {
			if(count === texts.length) {
				
			}
			currentText = texts[count];
			letter = currentText.slice(0, ++index);

			document.querySelector('.typing1').textContent = letter;
			if(letter.length === currentText.length) {
				count++;
				index = 0;

			}
			setTimeout(type, 20);
		}());


		setTimeout(() => {
			const text2 = ["* There're no use of any kind of plugins."];
			let count1 = 0;
			let index1 = 0;
			let letter1 = '';

			(function type() {
				if(count1 === text2.length) {

				}
				currentText = text2[count1];
				letter1 = currentText.slice(0, ++index1);

				document.querySelector('.typing2').textContent = letter1;
				if(letter.length === currentText.length) {
					count1++;
					index1 = 0;

				}
				setTimeout(type, 100);
			}());
		}, 2000)




		setTimeout(() => {
			const text3 = ["* All those projects are 100% responsive in all devices."];
			let count2 = 0;
			let index2 = 0;
			let letter2 = '';

			(function type() {
				if(count2 === text3.length) {

				}
				currentText = text3[count2];
				letter2 = currentText.slice(0, ++index2);

				document.querySelector('.typing3').textContent = letter2;
				if(letter.length === currentText.length) {
					count2++;
					index2 = 0;

				}
				setTimeout(type, 50);
			}());
		}, 6500);
		observer5.unobserve(forTypeWrite);

	});
};

const observer5 = new IntersectionObserver(typeWriteCallback, typeWriteOps);
observer5.observe(forTypeWrite); 