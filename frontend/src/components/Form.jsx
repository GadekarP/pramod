import React from 'react'
import { useEffect } from 'react'
// import '../script.js'
export default function Form() {
useEffect(()=>{
  const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
})
  return (
    <>
       <form action="#" class="form">
      <h1 class="text-center">Eden</h1>
      {/* <!-- Progress bar --> */}
      <div class="progressbar">
        <div class="progress" id="progress"></div>
        
        <div class="progress-step progress-step-active"></div>
        <div class="progress-step"></div>
        <div class="progress-step"></div>
        <div class="progress-step"></div>
      </div>

      {/* <!-- Steps --> */}
      <div class="form-step form-step-active">
        <h2 class="text-center">Welcome! First thing first....</h2>
        <p className='text-center'>You can always change them later</p>
        <div class="input-group">
          <label for="Full Name"><strong>Full Name</strong></label>
          <input type="text" name="username" id="Full Name" />
        </div>
        <div class="input-group">
          <label for="Display_Name"><strong>Display Name</strong></label>
          <input type="text" name="display_name" id="Display_Name" />
        </div>
        <div class="">
          <a href="#" class="btn btn-next width-100 ml-auto">Next</a>
        </div>
      </div>
      <div class="form-step">
        <h2 className='text-center'>Let's set up home for all your work</h2>
        <p className='text-center'>You can always create another workspace later</p>
        <div class="input-group">
          <label for="workspaceName"><strong>Workspace Name</strong></label>
          <input type="text" name="work" id="workspaceName" placeholder=' Eden' />
        </div>
        <label for="basic-url" class="form-label"><strong>Workspace URL</strong>( optional )</label>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">www.eden.com/</span>
        <input type="text" class="form-control" id="basic-url" placeholder='Example'/>
        </div>
        <div class="btns-group">
          <a href="#" class="btn btn-prev">Previous</a>
          <a href="#" class="btn btn-next">Next</a>
        </div>
      </div>
      {/* <div class="form-step">
        <div class="input-group">
          <label for="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
        </div>
        <div class="input-group">
          <label for="ID">National ID</label>
          <input type="number" name="ID" id="ID" />
        </div>
        <div class="btns-group">
          <a href="#" class="btn btn-prev">Previous</a>
          <a href="#" class="btn btn-next">Next</a>
        </div>
      </div> */}
      <div className="form-step">
        <h2 className='text-center'>How are you planing to use Eden?</h2>
        <p className='text-center'>We'll streamline your setup experience accordingly</p>
      <div class="row">
  <div class="col-sm-6">
    <div class="card my-5">
      <div class="card-body">
      <i class="bi bi-person-fill"></i>
        <h5 class="card-title">For myself</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card my-5">
      <div class="card-body">
      <i class="bi bi-person-hearts"></i>
        <h5 class="card-title">With my team</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
<div class="btns-group my-3">
          <a href="#" class="btn btn-prev">Previous</a>
          <a href="#" class="btn btn-next">Next</a>
        </div>
      </div>
      <div class="form-step">
      <h1 className='align-content-center text-center'><i class="bi bi-check-circle-fill success_icon"></i></h1>
       <h2 className='text-center'>Congratulations, Eden!</h2>
       <p className='text-center'>You have completed onboarding, you can start using the Eden!</p>
        <div class="btns-group">
          <a href="#" class="btn btn-prev">Previous</a>
          <input type="submit" value="Submit" class="btn" />
        </div>
      </div>
    </form>
    
    </>
  )
}

