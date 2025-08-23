 //we call this library to prevent masonory cards being overlapped on the page load.
  //it waits for the images to load
  //Then initializes masonary
  const grid = document.querySelector('.row[data-masonry]');
  imagesLoaded(grid, function () {
    new Masonry(grid, {
      itemSelector: '.col-lg-4',
      percentPosition: true
    });
  });
$('.btn').hover(function(){
  const el = $(this);
  $(this).animate({left: -5}, 50)
  .animate({left:5},50)
  .animate({left:-5},50)
  .animate({left:0},50)

})
//hiding the about me 
$('#aboutMe').hide();
//shpw the about page on
$('#experiences , .skills').on('click',(e)=>{
  //prevent link from jumping 
  e.preventDefault();
  $('#contact,#hero,#education,#portfolio,hr,#aboutMeText,#tech').hide();
  progressBar();
  softSkills();
  $('#aboutMe').show();
})

$('#portfolio').hide();

$('.portPage').on('click', () => {
  $('#contact,#hero,#education,#portfolio,hr,#aboutMeText,#tech,#aboutMe').hide();
  $('#portfolio').show();
//to avoid masonry disuption we need to initialize it
  const m = $('.myMasonry')[0];

  imagesLoaded(m, () => {
    new Masonry(m, {
      itemSelector: '.col-lg-4',
      percentPosition: true
    });
  });
});


$('.home , .navbar-brand').on('click',()=>{
  $('#hero,#education,hr,#aboutMeText,#tech').show();
  $('#portfolio,#contact,#aboutMe').hide();
})
//contact section 
$('#contact').hide();
$('.contact,.contactButton').on('click',()=>{
  $('#hero,#education,hr,#aboutMeText,#tech,#portfolio,#aboutMe').hide();
  $('#contact').show();
})
const progressBar = ()=>{
  $('#progressBar').html(`
   <h3 class='text-dark'>Technical Skills</h3>
  <div class="progress m-2" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>Java</span></div>
      </div>
      <div class="progress m-2" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar " style="width: 100%">
          <span>JavaScript</span></div></div>
      </div>
      <div class="progress m-2" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>HTML</span></div>
          </div>
      </div>
      <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>CSS</span></div>
          </div>
           <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>Bootstrap</span></div>
          </div>
           <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>JQuery</span></div>
          </div>
      </div>
       <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>SQL</span></div>
          </div>
           <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>Git/GitHub</span></div>
          </div>
           <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>Linux/Security and Network</span></div>
          </div>
          <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>Node.js,EJS,Express</span></div>
          </div>
          <div class="progress m-2" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%">
          <span>React</span></div>
          </div>
  `);
}

const softSkills = ()=>{
  $('#softSkills').html(`
     <h3 class='text-dark'>Professional Skills</h3>
  <div class="progress m-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Team Work</span></div>
      </div>
      <div class="progress m-3" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Adaptibility</span></div></div>
      </div>
      <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Attention to Detail</span></div>
          </div>
      </div>
      <div class="progress m-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Communication</span></div>
          </div>
           <div class="progress m-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Problem-Solving</span></div>
          </div>
           <div class="progress m-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Work Under Pressure</span></div>
          </div>
      </div>
       <div class="progress m-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress1" style="width: 100%">
          <span>Time Management</span></div>
  `);
}