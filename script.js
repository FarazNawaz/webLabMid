// remove card when click close button
function removeCard(event) {
    const card = event.target.closest('.faq');
    if (card) {
      card.remove();
    }
  }
  
  // copy css propertu
  function copyProperties(event) {
    const clickedCard = event.target.closest('.faq');
    if (clickedCard && isCopyingProperties) {
      const firstCard = document.querySelector('.faq');
      const styles = getComputedStyle(firstCard);
  
      // styling
      clickedCard.style.backgroundColor = styles.backgroundColor;
      clickedCard.style.border = styles.border;
      clickedCard.style.borderRadius = styles.borderRadius;
      clickedCard.style.boxShadow = styles.boxShadow;
    }
  }
  
  // Function to add a new card with user-provided question and answer
  function addNewCard() {
    const questionInput = document.getElementById('question-input');
    const answerInput = document.getElementById('answer-input');
    const faqContainer = document.querySelector('.faq-container');
  
    if (questionInput.value && answerInput.value) {
      const newCard = document.createElement('div');
      newCard.className = 'faq active';
  
      const newTitle = document.createElement('h3');
      newTitle.className = 'faq-title';
      newTitle.textContent = questionInput.value;
  
      const newText = document.createElement('p');
      newText.className = 'faq-text';
      newText.textContent = answerInput.value;
  
      const closeButton = document.createElement('button');
      closeButton.className = 'faq-toggle';
      closeButton.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
      closeButton.addEventListener('click', removeCard);
  
      newCard.appendChild(newTitle);
      newCard.appendChild(newText);
      newCard.appendChild(closeButton);
  
      faqContainer.insertBefore(newCard, faqContainer.firstElementChild);
  
      questionInput.value = '';
      answerInput.value = '';
    }
  }
  
  // Flag to determine if properties should be copied
  let isCopyingProperties = false;
  
  // Add event listener to the "Copy Properties" button
  document.getElementById('copy-properties-button').addEventListener('click', function() {
    isCopyingProperties = !isCopyingProperties; // Toggle the flag
  });
  
  // Add event listener to the "Add Card" button
  document.getElementById('add-button').addEventListener('click', addNewCard);
  
  // Add event listeners to each FAQ card's close button and copy button
  const faqButtons = document.querySelectorAll('.faq .faq-toggle i');
  faqButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.classList.contains('fa-times')) {
        removeCard(event);
      } else if (event.target.classList.contains('fa-chevron-down')) {
        copyProperties(event);
      }
    });
  });
  