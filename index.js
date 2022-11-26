// top section of the comment section 

document.querySelectorAll("#reply-button")[0].addEventListener("click",()=>{
   
        let firstSectionCreate = document.createElement("section")
        firstSectionCreate.innerHTML=`
        <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
        <textarea class="comments" name="comment-area" id="rep" placeholder="Add a comment" cols="30" rows="10"></textarea>
        <button class="rep1 other-btn">
         reply
        </button>
        `
        firstSectionCreate.classList.add("input-field")
        document.querySelectorAll(".setup")[0].appendChild(firstSectionCreate)
        document.querySelector("#rep").value = "@" + document.querySelectorAll("b")[0].innerHTML

        document.querySelector(".rep1").addEventListener("click",()=>{
            let newchild1 = document.createElement("section")
            newchild1.innerHTML=`
            <section id="me" class="comment-box-total replies">
            <div class="adder-box">
              <img id="plus" src="images/icon-plus.svg" alt="">
              <p class="number"> 0 </p>
              <img id="minus" src="images/icon-minus.svg" alt="">
            </div>
            <div class="comment-box">
               <div class="replies-comment-box">
                <div class="info-box">
                  <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
                  <b>juliusomo</b>
                  <span class="you">you</span>
                  <p>1 minute ago</p>
                </div>
                 <div class="right-top">
                  <div class="delete-boxx">
                    <img src="images/icon-delete.svg" alt="">
                    <span class="delete">
                      Delete
                    </span>
                  </div>
                  <div class="edit-box">
                    <img src="images/icon-edit.svg" alt="">
                    <span class="edit">
                      Edit
                    </span>
                  </div>
                  
                 </div>
               </div>
               <div class="comment">
                <p id="oi1">`+ document.querySelector("#rep").value +`</p>
               </div>
            </div>
          </section>
            `
            document.querySelectorAll(".reply-box")[0].appendChild(newchild1)
            document.querySelectorAll(".setup")[0].removeChild(firstSectionCreate)
            
            let length = document.querySelectorAll(".edit-box").length

            
            for (let i=0;i<length;i++){
                document.querySelectorAll(".edit-box")[i].addEventListener("click",()=>{
                    newchild1.style.display="none"
                    let editChild = document.createElement("section")
                    editChild.innerHTML=`
                    <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
                    <textarea class="comments" name="comment-area" id="update" placeholder="Add a comment" cols="30" rows="10"></textarea>
                    <button class="update1 other-btn">
                     Update
                    </button>
                    `   
                    editChild.classList.add("input-field")
                    document.querySelectorAll(".setup")[0].appendChild(editChild)
                    document.querySelector("#update").value = document.querySelector("#oi1").innerHTML
                    

                    document.querySelectorAll(".update1")[i].addEventListener("click",()=>{
                        document.querySelector("#oi1").innerHTML = document.querySelector("#update").value
                        document.querySelectorAll(".setup")[0].removeChild(editChild)
                        newchild1.style.display="flex"
                    })

                })

                document.querySelectorAll(".delete-boxx")[i].addEventListener("click",()=>{
                  document.querySelector("footer").style.display="flex"
                })

                document.querySelector(".nocancel").addEventListener("click",()=>{
                  document.querySelector("footer").style.display="none"
                })

                document.querySelector(".yesdelete").addEventListener("click",()=>{
                  document.querySelectorAll(".reply-box")[0].removeChild(newchild1)
                  document.querySelector("footer").style.display="none"
                })
            }
            
        })

})



// second section of the comment section 

document.querySelectorAll("#reply-button")[1].addEventListener("click",()=>{
   
    let secondSectionCreate = document.createElement("section")
    secondSectionCreate.innerHTML=`
    <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
    <textarea class="comments" name="comment-area" id="repp" placeholder="Add a comment" cols="30" rows="10"></textarea>
    <button class="rep2 other-btn">
     reply
    </button>
    `
    secondSectionCreate.classList.add("input-field")
    document.querySelectorAll(".setup")[1].appendChild(secondSectionCreate)
    document.querySelector("#repp").value = "@" + document.querySelector(".maxblagun").innerHTML

    document.querySelector(".rep2").addEventListener("click",()=>{
        let newchild2 = document.createElement("section")
        newchild2.innerHTML=`
        <section id="me" class="comment-box-total replies">
        <div class="adder-box">
          <img id="plus" src="images/icon-plus.svg" alt="">
          <p class="number"> 0 </p>
          <img id="minus" src="images/icon-minus.svg" alt="">
        </div>
        <div class="comment-box">
           <div class="replies-comment-box">
            <div class="info-box">
              <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
              <b>juliusomo</b>
              <span class="you">you</span>
              <p>1 minute ago</p>
            </div>
             <div class="right-top">
              <div class="delete-boxxx">
                <img src="images/icon-delete.svg" alt="">
                <span class="delete">
                  Delete
                </span>
              </div>
              <div class="edit-boxx">
                <img src="images/icon-edit.svg" alt="">
                <span class="edit">
                  Edit
                </span>
              </div>
              
             </div>
           </div>
           <div class="comment">
            <p id="oi2">`+ document.querySelector("#repp").value +`</p>
           </div>
        </div>
      </section>
        `
        document.querySelectorAll(".reply-box")[1].appendChild(newchild2)
        document.querySelectorAll(".setup")[1].removeChild(secondSectionCreate)

        let length = document.querySelectorAll(".edit-boxx").length
        for (let i=0;i<length;i++){
            document.querySelectorAll(".edit-boxx")[i].addEventListener("click",()=>{
                newchild2.style.display="none"
                let editChild2 = document.createElement("section")
                editChild2.innerHTML=`
                <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
                <textarea class="comments" name="comment-area" id="updatee" placeholder="Add a comment" cols="30" rows="10"></textarea>
                <button class="update2 other-btn">
                 Update
                </button>
                `   
                editChild2.classList.add("input-field")
                document.querySelectorAll(".setup")[1].appendChild(editChild2)
                document.querySelector("#updatee").value = document.querySelector("#oi2").innerHTML
                

                document.querySelectorAll(".update2")[i].addEventListener("click",()=>{
                    document.querySelector("#oi2").innerHTML = document.querySelector("#updatee").value
                    document.querySelectorAll(".setup")[1].removeChild(editChild2)
                    newchild2.style.display="flex"
                })

            })


            document.querySelectorAll(".delete-boxxx")[i].addEventListener("click",()=>{
              document.querySelector("footer").style.display="flex"
            })

            document.querySelector(".nocancel").addEventListener("click",()=>{
              document.querySelector("footer").style.display="none"
            })

            document.querySelector(".yesdelete").addEventListener("click",()=>{
              document.querySelectorAll(".reply-box")[1].removeChild(newchild2)
              document.querySelector("footer").style.display="none"
            })
        }
        
    })

})





// third section of the comment section 

document.querySelectorAll("#reply-button")[2].addEventListener("click",()=>{
   
    let thirdSectionCreate = document.createElement("section")
    thirdSectionCreate.innerHTML=`
    <div>
      <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
      <textarea class="comments-muh" name="comment-area" id="reppp" placeholder="Add a comment" cols="30" rows="10"></textarea>  
    </div>
    <button class="rep3 other-btn">
     Reply
    </button>

    `
    thirdSectionCreate.classList.add("muhh")
    document.querySelectorAll(".setin")[0].appendChild(thirdSectionCreate)
    document.querySelector("#reppp").value = "@" + document.querySelector(".ramsemiron").innerHTML

    document.querySelector(".rep3").addEventListener("click",()=>{
        let newchild3 = document.createElement("section")
        newchild3.innerHTML=`
        <div class="adder-box">
        <img id="plus" src="images/icon-plus.svg" alt="">
        <p class="number"> 2 </p>
        <img id="minus" src="images/icon-minus.svg" alt="">
      </div>
      <div class="comment-box">
         <div class="replies-comment-box">
          <div class="info-box">
            <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
            <b>juliusomo</b>
            <span class="you">you</span>
            <p>2 days ago</p>
          </div>
           <div class="right-top">
            <div class="delete-boxxxx">
              <img src="images/icon-delete.svg" alt="">
              <span class="delete">
                Delete
              </span>
            </div>
            <div class="edit-boxxx">
              <img src="images/icon-edit.svg" alt="">
              <span class="edit">
                Edit
              </span>
            </div>
            
           </div>
         </div>
         <div class="comment">
          <p id="oi3">
           `+ document.querySelector("#reppp").value+`
          </p>
         </div>
      </div>
        `
        newchild3.classList.add("replies")
        newchild3.classList.add("comment-box-total")
        document.querySelectorAll(".setin")[0].appendChild(newchild3)
        document.querySelectorAll(".setin")[0].removeChild(thirdSectionCreate)

        let length = document.querySelectorAll(".edit-boxxx").length
        for (let i=0;i<length;i++){
            document.querySelectorAll(".edit-boxxx")[i].addEventListener("click",()=>{
                newchild3.style.display="none"
                let editChild3 = document.createElement("section")
                editChild3.innerHTML=`
                <div>
                <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
                <textarea class="comments" name="comment-area" id="updateee" placeholder="Add a comment" cols="30" rows="10"></textarea>
                </div>
                <button class="update3 other-btn">
                 Update
                </button>
                `   
                editChild3.classList.add("muhhh")
                document.querySelectorAll(".setin")[0].appendChild(editChild3)
                document.querySelector("#updateee").value = document.querySelector("#oi3").innerHTML
                

                document.querySelectorAll(".update3")[i].addEventListener("click",()=>{
                    document.querySelector("#oi3").innerHTML = document.querySelector("#updateee").value
                    document.querySelectorAll(".setin")[0].removeChild(editChild3)
                    newchild3.style.display="flex"
                })

            })

            document.querySelectorAll(".delete-boxxxx")[i].addEventListener("click",()=>{
              document.querySelector("footer").style.display="flex"
            })

            document.querySelector(".nocancel").addEventListener("click",()=>{
              document.querySelector("footer").style.display="none"
            })

            document.querySelector(".yesdelete").addEventListener("click",()=>{
              document.querySelectorAll(".setin")[0].removeChild(newchild3)
              document.querySelector("footer").style.display="none"
            })
        }
        
    })

})





// already replied section

document.querySelector(".edit-boxxxx").addEventListener("click",()=>{
  document.querySelector("#replyer").value = document.querySelector("#oii").innerHTML
  document.querySelector("#muh").style.display="flex"
  document.querySelector("#me").style.display="none"
})

document.querySelector(".btn-muh").addEventListener("click",()=>{
  document.querySelector("#me").style.display="flex"
 document.querySelector("#oii").innerHTML = document.querySelector("#replyer").value
 document.querySelector("#muh").style.display="none"
})

document.querySelector(".delete-box").addEventListener("click",()=>{
  document.querySelector("footer").style.display="flex"
})

document.querySelector(".nocancel").addEventListener("click",()=>{
  document.querySelector("footer").style.display="none"
})

document.querySelector(".yesdelete").addEventListener("click",()=>{
  document.querySelector("#me").style.display="none"
  document.querySelector("footer").style.display="none"
})


// place comment box
document.querySelector("#send").addEventListener("click",()=>{
  let newcom = document.createElement("section")
  newcom.innerHTML=`
  <div class="adder-box">
  <img id="plus" src="images/icon-plus.svg" alt="">
  <span class="number">0</span>
  <img id="minus" src="images/icon-minus.svg" alt="">
</div>
<div class="comment-box">
   <div class="top-comment-box">
    <div class="info-box">
    <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
      <b>juliusomo</b>
      <p>1 minute ago</p>
    </div>

    <div class="butons">
        <div class="delete-boxxxxx">
        <img src="images/icon-delete.svg" alt="">
        <span class="delete">
          Delete
        </span>
      </div>
      <div class="edit-boxxxxx">
        <img src="images/icon-edit.svg" alt="">
        <span class="edit">
          Edit
        </span>
      </div>
    </div>

   </div>
   <div class="comment">
    <p class="bom">`+ document.querySelector("#commenter").value+`
    </p>
   </div>
</div>
  `
  newcom.classList.add("comment-box-total")
  document.querySelector("#append").appendChild(newcom)
  document.querySelector("#commenter").value=null

  document.querySelector(".edit-boxxxxx").addEventListener("click",()=>{
    
    let newEditer = document.createElement("section")
    newEditer.innerHTML=`
    <div class="hiv">
    <img class="avater" src="images/avatars/image-juliusomo.png" alt="">
    <textarea class="comments" name="comment-area" id="commented" placeholder="Add a comment" cols="30" rows="10"></textarea>
    </div>
    <button id="updt" class="btn">
     UPDATE
    </button>
    `

    newEditer.classList.add("input-field")
    document.querySelector("#append").appendChild(newEditer)
    document.querySelector("#commented").value = document.querySelector(".bom").innerHTML
    newcom.style.display="none"


    document.querySelector("#updt").addEventListener("click",()=>{
      newcom.style.display="flex"
      document.querySelector(".bom").innerHTML = document.querySelector("#commented").value
      document.querySelector("#append").removeChild(newEditer)
    })
  })

  document.querySelector(".delete-boxxxxx").addEventListener("click",()=>{
    document.querySelector("footer").style.display="flex"
  })

  document.querySelector(".nocancel").addEventListener("click",()=>{
    document.querySelector("footer").style.display="none"
  })

  document.querySelector(".yesdelete").addEventListener("click",()=>{
    document.querySelector("#append").removeChild(newcom)
    document.querySelector("footer").style.display="none"
  })


})