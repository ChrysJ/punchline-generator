const generatepunchline = document.getElementById('generatepunchline');
const banner = document.getElementById('banner');
const album = document.getElementById('album');
const punchline = document.getElementById('punchline');
const songtitle = document.getElementById('songtitle');
const artist = document.getElementById('artist');
let number = 0;

console.log(generatepunchline);

const randomnumber = () => {
	number = Math.floor(Math.random() * 4);
};
randomnumber();

generatepunchline.addEventListener('click', () => {
	randomnumber();
	console.log(number);
	generatepunchline.textContent = `Générez une autre punchline`;
	generatepunchline.classList.add('generatepunchlineactive');
	banner.style.display = 'block';
	banner.style.transition = '300ms';
	album.style.display = 'block';
	album.style.transition = '300ms';
	punchline.style.margin = '120px auto 40px';
	artist.style.margin = '10px auto 20px';

	if (number == 0) {
		banner.style.background = 'url(assets/img/banner_civilisation.png) center / cover';
		album.style.background = 'url(assets/img/civilisation.jpg) center / cover';
		punchline.textContent = `J'ai fait des erreurs et j'en referai, j'espère juste ce sera pas les mêmes`;
		songtitle.textContent = `Shonen`;
		artist.textContent = `orelsan`;
	}
	if (number == 1) {
		banner.style.background = 'url(assets/img/banner_perdu-davance.png) center / cover';
		album.style.background = 'url(assets/img/perdu-davance.jpg) center / cover';
		punchline.textContent = `plus j'avance plus j'grandis, plus j'comprend rien`;
		songtitle.textContent = `Changement`;
		artist.textContent = `orelsan`;
	}
	if (number == 2) {
		banner.style.background = 'url(assets/img/banner_la-fete-est-fini.png) center / cover';
		album.style.background = 'url(assets/img/la-fete-est-fini.jpg) center / cover';
		punchline.textContent = `tous les truc ou les gens disent : “ Tu perds ton temps “ faut qu’tu t’mettes à fond dedans et qu’tu t’accroches longtemps`;
		songtitle.textContent = `notes pour plus tard`;
		artist.textContent = `orelsan`;
	}
	if (number == 3) {
		banner.style.background = 'url(assets/img/banner_enfant-lune.png) center / cover';
		album.style.background = 'url(assets/img/enfant-lune.jpg) center / cover';
		punchline.textContent = `“J’les aide à percer, en faite, j’les aide à prendre la grosse tête"`;
		songtitle.textContent = `qui dit mieux`;
		artist.textContent = `orelsan dans le titre de gringe`;
	}
});
