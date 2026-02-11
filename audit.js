/**
 * AI Readiness Audit — Interactive Questionnaire
 * Run AI Educator Funnel
 *
 * Handles the 10-question audit flow, scoring, email capture,
 * and personalised results display.
 */

(function () {
  'use strict';

  // --- Configuration ---

  var questions = [
    {
      text: 'How often do you currently use AI tools in your teaching practice?',
      options: [
        'Never',
        'Tried once or twice',
        'A few times a month',
        'Weekly',
        'Daily'
      ]
    },
    {
      text: 'Which of these AI tools have you actually used? (Pick the one you use most)',
      options: [
        'None yet',
        'ChatGPT or Google Gemini',
        'A teacher-specific tool (MagicSchool, Eduaide, etc.)',
        'Multiple tools regularly',
        'I have built my own workflows'
      ]
    },
    {
      text: 'How confident are you writing prompts that get useful results?',
      options: [
        'What is a prompt?',
        'I copy prompts from others',
        'I can write basic prompts',
        'I write detailed prompts with context',
        'I have prompt libraries I reuse'
      ]
    },
    {
      text: 'How much time do you spend on lesson planning each week?',
      options: [
        'Less than 2 hours',
        '2 to 5 hours',
        '5 to 10 hours',
        '10 to 15 hours',
        'More than 15 hours'
      ]
    },
    {
      text: 'Has your school provided any AI training or CPD?',
      options: [
        'No, nothing',
        'One session but it was not useful',
        'Some training but I need more',
        'Good training and I want to go further',
        'I am the one delivering AI training'
      ]
    },
    {
      text: 'How do you feel about AI in education?',
      options: [
        'Nervous or sceptical',
        'Curious but unsure where to start',
        'Interested and experimenting',
        'Confident and using it regularly',
        'Excited and want to lead AI adoption'
      ]
    },
    {
      text: 'Do you use AI for any of these tasks? (Pick the most advanced)',
      options: [
        'None of these',
        'Generating lesson ideas',
        'Creating assessments or worksheets',
        'Writing reports or communications',
        'Automating recurring weekly tasks'
      ]
    },
    {
      text: 'How comfortable are you learning new technology?',
      options: [
        'I avoid it if possible',
        'I can learn with clear guidance',
        'I am comfortable with trial and error',
        'I enjoy exploring new tools',
        'I actively seek out new technology'
      ]
    },
    {
      text: 'What is your biggest barrier to using AI in teaching?',
      options: [
        'I do not know where to start',
        'I do not trust AI outputs',
        'I do not have time to learn',
        'My school does not support it',
        'I am already using it and want to do more'
      ]
    },
    {
      text: 'Where do you want to be with AI in 6 months?',
      options: [
        'Just understanding the basics',
        'Using it confidently for planning',
        'Having automated workflows',
        'Building custom tools for my school',
        'Teaching others how to use AI'
      ]
    }
  ];

  var levels = [
    {
      name: 'AI Explorer',
      range: [10, 15],
      label: 'Level 1',
      steps: [
        'Start with one tool: try ChatGPT for generating 3 lesson starter ideas this week.',
        'Join the Run AI community and introduce yourself in the Welcome thread.',
        'Download the AI Tool Map to see what is available.'
      ]
    },
    {
      name: 'AI Practitioner',
      range: [16, 22],
      label: 'Level 2',
      steps: [
        'Build your first prompt template for a task you repeat weekly.',
        'Try a teacher-specific AI tool (MagicSchool or Eduaide) for one lesson this week.',
        'Join the Run AI community and share your first AI win.'
      ]
    },
    {
      name: 'AI Integrator',
      range: [23, 30],
      label: 'Level 3',
      steps: [
        'Identify your 3 most time-consuming weekly tasks and draft AI workflows for each.',
        'Experiment with chaining prompts (output of one becomes input of the next).',
        'Join the Run AI community and contribute to the workflow library.'
      ]
    },
    {
      name: 'AI Builder',
      range: [31, 40],
      label: 'Level 4',
      steps: [
        'Pick one pain point in your school and prototype an AI solution.',
        'Document your build process to share with colleagues.',
        'Join the Run AI community and mentor teachers at earlier levels.'
      ]
    },
    {
      name: 'AI Native',
      range: [41, 50],
      label: 'Level 5',
      steps: [
        'Consider running an AI CPD session at your school using the Run AI framework.',
        'Explore building tools with Claude Projects or custom GPTs for your department.',
        'Join the Run AI community as a founding contributor.'
      ]
    }
  ];

  // --- State ---

  var currentQuestion = 0;
  var answers = [];
  var overlay = null;
  var modal = null;

  // --- DOM References (set on init) ---

  var els = {};

  // --- Public API ---

  function openAudit() {
    currentQuestion = 0;
    answers = [];
    renderQuestion(0);
    updateProgress(0);
    showStep('questions');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Focus trap
    setTimeout(function () {
      var firstOption = modal.querySelector('.audit__option');
      if (firstOption) firstOption.focus();
    }, 350);
  }

  function closeAudit() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- Rendering ---

  function renderQuestion(index) {
    var q = questions[index];
    var html = '';
    html += '<div class="audit__question-number">Question ' + (index + 1) + ' of ' + questions.length + '</div>';
    html += '<h3>' + q.text + '</h3>';
    html += '<div class="audit__options" role="radiogroup" aria-label="' + q.text + '">';
    for (var i = 0; i < q.options.length; i++) {
      var selected = (answers[index] === i) ? ' selected' : '';
      html += '<button class="audit__option' + selected + '" data-value="' + i + '" role="radio" aria-checked="' + (answers[index] === i ? 'true' : 'false') + '" tabindex="0">';
      html += '<span class="audit__option-marker"></span>';
      html += '<span>' + q.options[i] + '</span>';
      html += '</button>';
    }
    html += '</div>';

    els.questionContainer.innerHTML = html;
    els.questionContainer.classList.add('active');

    // Bind click handlers
    var options = els.questionContainer.querySelectorAll('.audit__option');
    for (var j = 0; j < options.length; j++) {
      options[j].addEventListener('click', handleOptionClick);
      options[j].addEventListener('keydown', handleOptionKeydown);
    }
  }

  function updateProgress(index) {
    var pct = ((index) / questions.length) * 100;
    els.progressFill.style.width = pct + '%';
    els.progressText.textContent = index + ' of ' + questions.length + ' answered';
  }

  function showStep(step) {
    els.questionContainer.classList.remove('active');
    els.emailStep.classList.remove('active');
    els.results.classList.remove('active');

    if (step === 'questions') {
      els.questionContainer.classList.add('active');
    } else if (step === 'email') {
      els.emailStep.classList.add('active');
    } else if (step === 'results') {
      els.results.classList.add('active');
    }
  }

  // --- Event Handlers ---

  function handleOptionClick(e) {
    var btn = e.currentTarget;
    var value = parseInt(btn.getAttribute('data-value'), 10);
    answers[currentQuestion] = value;

    // Visual feedback
    var allOptions = els.questionContainer.querySelectorAll('.audit__option');
    for (var i = 0; i < allOptions.length; i++) {
      allOptions[i].classList.remove('selected');
      allOptions[i].setAttribute('aria-checked', 'false');
    }
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');

    // Auto-advance after brief delay
    setTimeout(function () {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
        updateProgress(currentQuestion);
      } else {
        // All questions answered
        updateProgress(questions.length);
        showStep('email');
      }
    }, 300);
  }

  function handleOptionKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
    // Arrow key navigation
    var options = Array.prototype.slice.call(els.questionContainer.querySelectorAll('.audit__option'));
    var idx = options.indexOf(e.currentTarget);
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (idx < options.length - 1) options[idx + 1].focus();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (idx > 0) options[idx - 1].focus();
    }
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    var nameInput = els.emailStep.querySelector('input[type="text"]');
    var emailInput = els.emailStep.querySelector('input[type="email"]');
    var name = nameInput ? nameInput.value.trim() : '';
    var email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
      emailInput.style.borderColor = '#e53e3e';
      emailInput.focus();
      return;
    }

    /* --------------------------------------------------------
     * Integration point: Send name + email + score to your
     * email provider here (ConvertKit, Mailchimp, Skool API).
     *
     * Example:
     *   fetch('https://your-api.com/subscribe', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ name: name, email: email, score: calculateScore(), level: getLevel().name })
     *   });
     * ------------------------------------------------------- */
    console.log('[Run AI Audit] Lead captured:', { name: name, email: email, score: calculateScore(), level: getLevel().name });

    showResults();
  }

  function handleSkipEmail() {
    console.log('[Run AI Audit] Email skipped. Score:', calculateScore(), 'Level:', getLevel().name);
    showResults();
  }

  // --- Scoring ---

  function calculateScore() {
    var total = 0;
    for (var i = 0; i < answers.length; i++) {
      total += (answers[i] !== undefined ? answers[i] + 1 : 1);
    }
    return total;
  }

  function getLevel() {
    var score = calculateScore();
    for (var i = levels.length - 1; i >= 0; i--) {
      if (score >= levels[i].range[0]) {
        return levels[i];
      }
    }
    return levels[0];
  }

  // --- Results ---

  function showResults() {
    var score = calculateScore();
    var level = getLevel();

    // Build results HTML
    var html = '';

    // Score ring
    html += '<div class="audit__score-ring">';
    html += '<svg viewBox="0 0 140 140"><circle class="audit__score-ring-bg" cx="70" cy="70" r="65"></circle>';
    html += '<circle class="audit__score-ring-fill" cx="70" cy="70" r="65" id="scoreRingFill"></circle></svg>';
    html += '<div class="audit__score-value">';
    html += '<span class="audit__score-number">' + score + '/50</span>';
    html += '<span class="audit__score-label">AI Readiness</span>';
    html += '</div></div>';

    // Level badge
    html += '<div class="audit__level-badge">' + level.label + ': ' + level.name + '</div>';

    // Next steps
    html += '<div class="audit__next-steps">';
    html += '<h4>Your Personalised Next Steps</h4>';
    for (var i = 0; i < level.steps.length; i++) {
      html += '<div class="audit__next-step">';
      html += '<span class="audit__next-step-number">' + (i + 1) + '</span>';
      html += '<p>' + level.steps[i] + '</p>';
      html += '</div>';
    }
    html += '</div>';

    // CTA
    html += '<a href="#lead-capture" class="btn btn--primary audit__results-cta" onclick="document.querySelector(\'.audit-overlay\').classList.remove(\'open\'); document.body.style.overflow=\'\';">Join Run AI to Start ' + level.label + '</a>';

    els.results.innerHTML = html;
    showStep('results');

    // Animate the score ring
    setTimeout(function () {
      var circumference = 2 * Math.PI * 65; // ~408
      var pct = score / 50;
      var offset = circumference * (1 - pct);
      var ring = document.getElementById('scoreRingFill');
      if (ring) {
        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = offset;
      }
    }, 100);
  }

  // --- Initialisation ---

  function init() {
    overlay = document.querySelector('.audit-overlay');
    modal = document.querySelector('.audit-modal');

    if (!overlay || !modal) return;

    els.questionContainer = modal.querySelector('.audit__question');
    els.emailStep = modal.querySelector('.audit__email-step');
    els.results = modal.querySelector('.audit__results');
    els.progressFill = modal.querySelector('.audit__progress-fill');
    els.progressText = modal.querySelector('.audit__progress-text');

    // Close button
    var closeBtn = modal.querySelector('.audit-modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeAudit);
    }

    // Click outside to close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeAudit();
    });

    // Escape key to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeAudit();
      }
    });

    // Email form
    var emailForm = els.emailStep.querySelector('.audit__email-form');
    if (emailForm) {
      emailForm.addEventListener('submit', handleEmailSubmit);
    }

    // Skip email link
    var skipBtn = els.emailStep.querySelector('.audit__email-skip');
    if (skipBtn) {
      skipBtn.addEventListener('click', handleSkipEmail);
    }

    // Bind all audit trigger buttons
    var triggers = document.querySelectorAll('[data-audit-trigger]');
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', function (e) {
        e.preventDefault();
        openAudit();
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.RunAIAudit = {
    open: openAudit,
    close: closeAudit
  };
})();
