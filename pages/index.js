import Head from 'next/head'
import {Progress} from 'reactstrap'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amal Edward </title>
              <link rel="icon" href="https://thumbs.dreamstime.com/b/ed-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164906306.jpg" />
          </Head>
            
            <div class="container">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <CardProfile/>
              <CardDetails/>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Amal Edward
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Date of of Birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      14 September, 1995
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      edphiljohn@gmail.com
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (226) 926 1399
                    </div>
                  </div>
                  <hr/>
                  
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Downtown Area, London, Ontario
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div class="card mb-3">
               
                <div class="col-md-12 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><h6 class="material-icons text-danger mr-2">Technical Skills</h6></h6>
                      <small>Front-End Frameworks - HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, SASS</small>
                      <Progress value="100" color='success' />
                      <small>Backend Languages - Node.js, Django Framework</small>
                      <Progress value="90"/>
                      
                      <small>Programming Languages - Python, C, JavaScript, C++</small>
                      <Progress value="90" color='success'/>
                      <small>Database - MySQL, MongoDB</small>
                      <Progress value="90" />
                      <small>GNU/Linux, Bash Scripting, Networking</small>
                      <Progress value="100" color='success'/>
                      <small>Git, Sanity.io, Typescript, Redux on React </small>
                      <Progress value="85" />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
     <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
         <div class="card-body ">
             <div class="row">
                 <div class="col-12 ">
                     <h4 class="card-title "><b>Random Food Recipe </b></h4>
                 </div>
                 <h6>An application that displays a food recipe randomly</h6>
                 <div class="col">
                     <h6 class="card-subtitle mb-2 text-muted">
                         <p class="card-text text-muted small "> <img src="https://img.icons8.com/metro/26/000000/star.png" class="mr-1 " width="19" height="19" id="star"/> <span class="vl mr-2 ml-0"></span> Created by <span class="font-weight-bold"> Amal Edward</span> on 27 February , 2021</p>
                     </h6>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white px-0 ">
             <div class="row">
                 <div class=" col-md-auto "> <a target="_blank" href="https://github.com/EdPhilJohn/Random-Food-Recipe-Application" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/download.png" width="19" height="19"/> <small>Source Code</small></a> <i class="mdi mdi-settings-outline"></i> <a href="/projects/recipeapi" target="_blank" class=" btn-outlined btn-black text-muted"><img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"/> <small>Program Link</small> </a> <a href="#" class="btn btn-outlined btn-black text-muted "></a> </div>
                 <div class="col-md-auto ">
                     <ul class="list-inline">
                         <li class="list-inline-item"> <img src="https://avatars.githubusercontent.com/u/28191442?s=400&u=5c077312bf2536ddde4edc6ea72aa564abed6ddf&v=4" alt="DP" class=" rounded-circle img-fluid " width="35" height="35"/> </li>
                         
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
         <div class="card-body ">
             <div class="row">
                 <div class="col-12 ">
                     <h4 class="card-title "><b>Public IP Location</b></h4>
                 </div>
                 <h6>This application lets you see you IP address as well as other details of your location</h6>
                 <div class="col">
                     <h6 class="card-subtitle mb-2 text-muted">
                         <p class="card-text text-muted small "> <img src="https://img.icons8.com/metro/26/000000/star.png" class="mr-1 " width="19" height="19" id="star"/> <span class="vl mr-2 ml-0"></span> Created by <span class="font-weight-bold"> Amal Edward</span> on 28 February , 2021</p>
                     </h6>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white px-0 ">
             <div class="row">
                 <div class=" col-md-auto "> <a href="https://github.com/EdPhilJohn/IP-Information-and-location" target="_blank" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/download.png" width="19" height="19"/> <small>Source Code</small></a> <i class="mdi mdi-settings-outline"></i> <a href='/projects/ipinfo' target="_blank" class=" btn-outlined btn-black text-muted"><img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"/> <small>Program Link</small> </a> <a  class="btn btn-outlined btn-black text-muted "></a> </div>
                 <div class="col-md-auto ">
                     <ul class="list-inline">
                         <li class="list-inline-item"> <img src="https://avatars.githubusercontent.com/u/28191442?s=400&u=5c077312bf2536ddde4edc6ea72aa564abed6ddf&v=4" alt="DP" class=" rounded-circle img-fluid " width="35" height="35"/> </li>
                         
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     <div class="card mb-2 mt-5 border-5 pt-2 active pb-0 px-3">
         <div class="card-body ">
             <div class="row">
                 <div class="col-12 ">
                     <h4 class="card-title "><b>Covid-19 Statistics</b></h4>
                 </div>
                 <h6>Data of all Covid related cases and deaths being displayed in this application</h6>
                 <div class="col">
                     <h6 class="card-subtitle mb-2 text-muted">
                         <p class="card-text text-muted small "> <img src="https://img.icons8.com/metro/26/000000/star.png" class="mr-1 " width="19" height="19" id="star"/> <span class="vl mr-2 ml-0"></span> Created by <span class="font-weight-bold"> Amal Edward</span> on 1 March , 2021</p>
                     </h6>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white px-0 ">
             <div class="row">
                 <div class=" col-md-auto "> <a href="https://github.com/EdPhilJohn/Covid-19-Statistics" target="_blank" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/download.png" width="19" height="19"/> <small>Source Code</small></a> <i class="mdi mdi-settings-outline"></i> <a href='/projects/covidapi' target="_blank" class=" btn-outlined btn-black text-muted"><img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"/> <small>Program Link</small> </a> <a href="#" class="btn btn-outlined btn-black text-muted "></a> </div>
                 <div class="col-md-auto ">
                     <ul class="list-inline">
                         <li class="list-inline-item"> <img src="https://avatars.githubusercontent.com/u/28191442?s=400&u=5c077312bf2536ddde4edc6ea72aa564abed6ddf&v=4" alt="DP" class=" rounded-circle img-fluid " width="35" height="35"/> </li>
                         
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     
 </div>
        </div>
 

      
    </div>
  )
}
function CardProfile(){
  return(
    <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="/profilepic.jpg" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Amal Edward</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-secondary mb-1">Network Engineer</p>
                      <p class="text-muted font-size-sm">London, Ontario, CA</p>
                      
                      <a class="btn btn-primary me-2" href="https://www.instagram.com/edphiljohn/" target="_blank" role="button">Follow</a>
                      <a class="btn btn-outline-primary me-2" href="https://www.messenger.com/t/100004345866244/" target="_blank" role="button">Message</a>
                      
                    </div>
                  </div>
                </div>
              </div>
  )
}

function CardDetails(){
  return(
  <div class="card mt-3">
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0 me-2"><img src="https://th.bing.com/th/id/Re154da526210b69c549e5f0be902e1e2?rik=u%2bSAd9hSWdRDTg&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f902%2f874%2f330%2fblack-linkedin-icon.png&ehk=6XV8bsBxoGYluZMJbs%2b7ykais3MagL8DsU%2bqnDAYzGc%3d&risl=&pid=ImgRaw" width="28px" height="28px" /></h6>
      <span class="text-secondary"><a href="https://www.linkedin.com/in/edphiljohn/" target="_blank">edphiljohn</a></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0 me-2"><img src="https://cdn.afterdawn.fi/v3/news/original/github-logo.png" width="28px" height="28px" /></h6>
      <span class="text-secondary"><a  href="https://github.com/EdPhilJohn" target="_blank">edphiljohn</a></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0 me-2"><img src="https://th.bing.com/th/id/R3ea5d09ed6d30dbf6f1f4871e5e4c788?rik=eup%2fip%2b%2bPb5cTA&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f251%2f835%2f636%2fblack-email-icon.png&ehk=MRfsAEsSVSSBYQmxuFfZs9MoETTvHG4hR5pfgPcsx6k%3d&risl=&pid=ImgRaw" width="28px" height="28px" /></h6>
      <span class="text-secondary"><a href="mailto:edphiljohn@gmail.com"  target="_blank">edphiljohn@gmail.com</a></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0 me-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1024px-Black_Instagram_icon.svg.png" width="23px" height="23px" /></h6>
                       
      <span class="text-secondary"><a href="https://www.instagram.com/edphiljohn/" target="_blank">@edphiljohn</a></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0 me-2"><img src="https://th.bing.com/th/id/Rac7c4437586fd33b6b0f65925408b0ad?rik=kJh6DReIRvwXFg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f03%2ffacebook-icon-black-circle_254679.png&ehk=PJz2yb%2f5GnyRVTUD4NeqYvqvyCUM9xjtrNtFtJdIcS8%3d&risl=&pid=ImgRaw" width="28px" height="28px" /></h6>
      <span class="text-secondary"><a  href="https://www.facebook.com/profile.php?id=100022393132338" target="_blank">Amal Edward</a></span>
    </li>
  </ul>
</div>)
}