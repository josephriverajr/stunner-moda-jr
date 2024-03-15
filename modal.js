/* js code */

// toggleModal - params (boolean) | 
function toggleModal(show) {
    let body = document.body; // initailized body tag
    let showModal = document.getElementById("showModal");; // initailized modal container tag
    if(show){ // if params is true
        showModal.style.display = "block";
        showModal.style.visibility = "hidden"; 
        body.classList.add("modal-open");
        setTimeout(() => { // added this for additional animation
            showModal.style.visibility = "visible";
            showModal.style.opacity = "1";
        }, 250)
    }
    else{ // otherwise when it is false
        showModal.style.opacity = "0"; 
        setTimeout(() => {
            body.classList.remove("modal-open");
            showModal.style.display = "none"; 
        }, 250)
    }
}

// cancelledBtn - changes the modal content and status from table
function cancelledBtn(){ 
    let new_contents = document.querySelector("#modalBody");
    let status_container = document.querySelector("#status-container");
    new_contents.innerHTML= "<p>Subscription successfully cancelled!</p>";
    setTimeout(() => { // added this for 2 seconds delay auto close modal
        toggleModal(false);
        status_container.innerHTML= "<small>cancelled</small>";
    }, 2000)
}