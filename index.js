const createTemplate = (htmlElement, title, content, fn) => {

  let template = [
    '<div class="' + htmlElement + '" >',
      '<h1>' + title + '</h1>',
      '<div class="content">' + content + '</div>',
      '<button id="button1">Okay</button>'
  ].join('\n');
  $('body').append(template);
  $('#button1').click(fn);
}

const clickHandler = () => {
  alert('click handler called');
}

createTemplate('test', 'Title is here', 'some content here', clickHandler);