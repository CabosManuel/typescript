(()=>{
  let testNull: null = null;
  let testUndefined: undefined = undefined;

  let id: number | null = null;
  id = 10001;

  let name: string | undefined = undefined;
  name = 'Sans'

  function print(name: string | null) {
    let text = 'Hello ';
    if (name) {
      text += name;
    } else {
      text += 'nobody';
    }

    console.log(text);
  }

  print('Manuel');
  print(null);

  function simplePrint(name: string | null) {
    let text = 'Hello ';
    text += name?.toLocaleLowerCase() || 'nobody';
    console.log(text);
  }

  simplePrint('Manuel');
  simplePrint(null);
})();
