$(function() {
  $('div.computer').hide();

  $('div.throw-list').on('click', '.throw-btn', function(event) {
    event.preventDefault();
    var $selectedBtn = $(this);
    userHelper($selectedBtn);
    var userChoice = sortUserChoice($selectedBtn.attr('class'));

    var computerChoice = pickThrow();
    assignThrowClass(computerChoice);

    $('div.computer').show();

    setTimeout(function() {
      alert(declareWinner(tie, userBeatsComputer, userChoice, computerChoice));
    }, 2800);
  })

  function assignThrowClass(computerChoice) {
    var $computerThrowBtn = $('button.computer-throw-btn i.fa');

    if(computerChoice === 'rock') {
      $computerThrowBtn.addClass('fa-hand-rock-o');
    } else if (computerChoice === 'paper') {
      $computerThrowBtn.addClass('fa-hand-paper-o');
    } else {
      $computerThrowBtn.addClass('fa-hand-scissors-o');
    }
  }

  var throws = ['rock', 'paper', 'scissors'];

  function declareWinner(tie, userBeatsComputer, userChoice, computerChoice) {
    if (tie(userChoice, computerChoice)) {
      return 'tie!';
    } else if (userBeatsComputer(userChoice, computerChoice)) {
      return 'User Wins!';
    } else {
      return 'Computer Wins!';
    }
  }

  function pickThrow() {
    var choice = throws[Math.floor(Math.random() * 3)];
    return choice;
  }

  function sortUserChoice($selectedBtn) {
    console.log($selectedBtn);
    var classes = $selectedBtn.split(' ');
    if (classes.includes('rock')) {
      return 'rock';
    } else if (classes.includes('paper')) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

  function tie(userChoice, computerChoice) {
    return userChoice === computerChoice;
  }

  function userBeatsComputer(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'scissors') {
      return true;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return true;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return true;
    } else {
      return false;
    }
  }

  // helper functions

  function hideElements() {
    $('div.inactive').fadeOut('slow');
  }

  function userHelper($selectedBtn) {
    $selectedBtn.parent().removeClass('inactive');
    $selectedBtn.addClass('active');
    hideElements();
  }

});
