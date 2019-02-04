function showFormElements(oForm) {
  var msg = '';

  for (i = 0; i < oForm.length, oForm.elements[i].getAttribute("type") !== 'button'; i++) {
    //msg += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].GetSearch + "' and data: ";
    if(oForm.elements[i].value == null || oForm.elements[i].value == '') {
    msg += "VACIO \n";
    } else {
      msg += oForm.elements[i].value + "\n";
    }
  }
    localStorage.setItem("storageName",msg);
    window.location.assign("results.html");
}

function readTextFile(word)
{
  file = "2000-8.txt"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                var rima = '';
                rima = matchRima(allText,word);
                //rima = 'dos';
                localStorage.setItem("quijote2",rima);
                //rawFile.send(null);
            }
        }
    }
    rawFile.send(null);
    //return allText;
}

function matchRima(text,search)
{

  var str = text;
  var words = str.split(" ");
  var selected = [];
  var j = 0;
  //alert(search); //

  var test = '';

  for(var i=0; i<search.length -1; i++)
  {
    test += search[i];
  }

  test = test.slice(-3);
  var len = 0;
  var last = 0;
  var letter = '';

  for (var i = 0; i < words.length - 1; i++) {
    len = words[i].length;

    if(len > 3)
      letter = words[i].slice(len-3).toUpperCase()
    else {
      letter = words[i].toUpperCase()
    }



    if(letter == test.toUpperCase())
    {
      selected[j] = words[i-1].toLowerCase()+" "+words[i].toLowerCase();
      selected[j] += ' ';
      j = j+1;
    }
}

  //alert(search);
  selected = removeDups(selected);

  return selected;
}

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}
