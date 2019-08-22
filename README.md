This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### App desenvolvido no Curso do PluralSight 
A primeira decisão que temos que tomar na hora de criar uma APP em React é sobre a estrutura dos componentes. Devemos 
decidir:
-   Quantos componentes usar
-   O que cada componente deve descrever

Isso é fácil de decider se já temos uma noção boa da aplicaçao que vamos desenvolver. Mas geralmente não temos. O instrutor
geralmente começa com o que faz sentido para ele, e mantém a mente aberta para mudanças. Ou seja, renomeando componentes, 
deletando etc. **O instrutor disse que não há uma maneira certa ou errada de fazer, depende de cada momento.** 
Nesse exemplo a aplicação será uma lista de cartões do github. Se vamos mexer com cartão essa é a primeira pista que 
vamos seguir para criar nosso component. Criar um componente para representar um cartão. E um outro componente para 
representar a lista dos cartões:
- Componente para Representar os Cartões
- Componente para Representar a lista deles

Nesse aula, ao invez de trabalhar com function component, vamos trabalhar com class component. Primeio, para trabalhar 
com class componente a assinatura dela será:
```
class App extends Component {
}
```
Assim como function component, class component também mapeia dados para visualização. As classes fazem isso usando uns 
poucos conceitos relacionado à class components. Vamos aprender dois principais. Temos o conceito de constructor e o 
conceito de this. 
Cada React Component deve ter um render function. Uma class pode ter muitas functions, mas a function render é a única 
que é obrigatória. **Fazemos a function Render() retornar a virtual DOM description do meu componente.**Inicialmente 
podemos fazer assim:
```
class App extends Component {
    render(){
    return (
        <div>
            <div className="header">{title}</div>
        </div>
    );
  }
}
```
Mas porém ao inves de receber um argumento props, em class component, ambos props e state são gerenciados em uma instancia 
da class. Cada instancia tem sua props e state. No nosso exemplo, o title prop, vai virar `this.props.title`
```
class App extends Component {
    render(){
    return (
        <div>
            <div className="header">{this.props.title}</div>
            <Card />
        </div>
    );
  }
}
```
Depois vamos criar a class Card, ficando assim:
```
class Card extends Component {
    render() {
        return(
            <div className="github-profile">
                <img src="https://placehold.it/75" alt="Foto perfil do github"/>
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}
```

### Working with data

Aqui usamos uns dados para testar. Diz o instrutor que isso chama _fake test data_. Esses dados foram copiados dessa
[url](api.github.com/users/samuel14find), onde vc pode ver que colocando o nome do usuário e pegamos as informações dele. 
No nosso caso, uma vez que queremos renderizar mútiplos cards, precisamos de um outro componente. Nesse caso vai ser 
criado um CardList. Podemos gerenciar o state da application neste CardList, mas vai ser tomado essa decisão depois. Esse
componente vai ser escrito como uma Function Component. Em uma aplicação react podemos misturar function components com 
class components. O CardList component irá receber o argumento props e vamos fazer ele retornar <div> que irá ter 
a lista de cards. **Lá no meu App vai ser renderizado o CardList**. 
```
export function CardList (props) {
    return (
        <div>
            <Card />
        </div>
    )
}
```
Neste exemplo iremos usar ums dados para test. Esses dados estão no forma de array. 
```
const testData = [
	  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
export function CardList (props) {
    return (
        <div>
            <Card />
        </div>
    )
}
```
E dentro da function render lá na minha component Card, vou criar uma variável local, chamada profile, e pegar o primeiro 
elemento dessa array testData. E vamos mudar o placeholder na imagem para fazer um teste, para ser preenchido com dados 
dinâmicos, fazendo assim:
```
export class Card extends Component {
    render() {
        const profile = testData[0];
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} alt="Foto perfil do github"/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}
```
Com isso temos uma ideia de como o Card vai funcionar. Vamos fazer essa coisa reusável. Se nós quisermos renderizar múltiplos
cards podemos fazer algo assim: 
```
export function CardList (props) {
    return (
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
```
Mas  ao invés de fazer isso, vamos fazer o Card Component receber seus dados através de seu props. Fazer algo assim:
```
export function CardList (props) {
    return (
        <div>
            <Card name="" company="" />
            <Card />
            <Card />
        </div>
    )
}
```
Uma outra forma de fazer isso é pegar o objeto que armazena o props e spread (espalhar) dentro do Component card fazendo 
assim:
```
 <Card {...testData[0]} />
```
Quando usamos o operador spread com um objeto como este, em um component React, todas as propriedades desse objeto se 
tornaram props para este component. Assim para fazer um teste vamos Spread dois objetos para testar. 
```
export function CardList (props) {
    return (
        <div>
            <Card {...testData[0]}/>
            <Card {...testData[1]}/>
        </div>
    )
}
```
E para fazer isso trabalhar, vamos ir lá no Card component a variável profile vai se tornar:
```
const profile = this.props
```
Dessa forma profile irá capturar todas as props vindas para o component Card como um objeto profile. Nesse caso 
o this vai se referir à uma instancia do component <Card />. Nesse caso o que seria uma instância de <Card /> ? Sabemos
que objetos são instanciados a partir de classes e chamamos cada objeto de uma instancia de uma classe. **Mas o que é uma 
instancia em uma aplicação react?** A cada vez que usamos um component <Card />,como fazemos duas vezes lá em cima, 
internamente o React cria uma instancia do component e usa para renderizar o elemento. Essa instancia é algo que o react 
mantém em memória para cada elemento renderizado. E não está no navegador. O que está no navegador é o resultado da operação
DOM que o react usou para criar a instancia. **O que devemos internalizar é que a cada vez que nós usamos um component nós 
recebemos uma instancia diferente para trabalhar. **Assim o this card é diferente do this do segundo card. E isso é porque 
o React coloca o props diferente para cada card. E usando props genéricos no component card, nós fazemos ele reusável. Significando 
que agora podemos usar ele para renderizar qualquer card. 

Mas ainda estamos trabalhando difícil. O que podemos fazer e pegar a array de objetos testData, como uma array lá no component
<Card /> e mapear ela em uma array de elementos Card. Assim podemos pegar o testData e mapear ele em outra array: `{testData.map()}`
e isso nos dá acesso á um single profile object na array de profiles: `{testdata.map(profile)}`. E depois vamos mapear ela em um 
card component, assim: `{testData.map(profile => <Card />)}` e como props para esse card element podemos spreat o profile 
variable que é exposto pelo map: `{testData.map(profile => <Card {...profile}/>)}`. Ficando o component CardList assim:
```
export function CardList (props) {
    return (
        <div>
            {testData.map(profile => <Card {...profile}/>)}
        </div>
    )
}
```
Aqui temos uma mistura de JS e React, a function Map() é uma function javascript que podemos invocar em arrays. Ela pega 
uma function como argumento, e então usa ela para converter uma array em outra array usando o retorno do valor na function.
Assim essa map converte testData em algo assim: `[<Card />, <Card />, <Card />]`. E por sua vez, isso é algo assim, falando 
em termos de React: `[React.createElement(), React.createElement(), React.createElement()]`. 

### Initializing and Reading the State Object
Agora vamos criar um form para pegar a entrada do usuário. E para fazer isso, vamos criar um componente. Vamos criar 
uma class component, ele vai ficar assim:
```
export class Form extends Component {
    render() {
        return(
            <form action="">
                <input type="" placeholder="GitHub usernamd"/>
                <button>Add cart</button>
            </form>
        );
    }
}
``` 
E para fazer esse componente aparecer no navegador, precisamos colocar ele em algum lugar. Podemos colocar ele para 
ser renderizado no Componente CartList fazendo assim:
```
return (
        <div>
            <Form />
            {props.profiles.map(profile => <Card {...profile}/>)}
        </div>
    )
```
**NÃO DEVEMOS FAZER ISSO**. O Component Form não é parte da lógica do component CardList, _cada componente tem sua própria
responsabilidade_. O Component CardList lê uma lista de card, e o component Form vai ler a entrada do usuário. Não devemos 
misturar eles. Seria melhor colocar esse componente para ser renderizado em um componente que fica a cima, um Top Level 
componente, para dessa forma ele ser irmão do Card list. Vamos usar o componente App. Esse irá gerenciar a conexão entre 
esses dois componentes. 
```
return (
        <div>
          <div className="header">{this.props.title}</div>
            <Form/>
            <CardList/>
        </div>
    );
```
Agora vamos atacar a array de dados que temos. Até esse ponto ela está disponível globalmente. Nosso componente não deveria
ser variáveis globais. Vamos fazer o testData parte do Component App, e fazer a CardList receber o testData como uma prop.
Vou nomear essa prop como profile e inicializar ela a parte do testData:
```
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

export class App extends Component{
  render() {
    return (
        <div>
          <div className="header">{this.props.title}</div>
            <Form/>
            <CardList profiles=testData/>
        </div>
    );
  }
}
```
E fazendo assim, agora lá no meu componente CardList vou fazer `props.profiles.map(profile => <Card {...profile}/>)}`, ficando 
assim: 
```
export function CardList (props) {
    return (
        <div>
            {props.profiles.map(profile => <Card {...profile}/>)}
        </div>
    )
}
```
Assim essa propriedade está vindo do pai, e o componente CardList já não depende de qualquer variável global. 
Uma vez que queremos que o React renderise o componente CardList a cada vez que um novo registro é adicionado na array 
de profile, a maneira mais fácil de disparar esta renderização e colocar o profile array em uma state object especial. 
Depois disso tudo que precisa fazer é adicionar um novo registro na array, e o React irá reagir e refletir as mudanças na 
interface. A questão é ne qual component devemos segurar esse novo estado ? Até agora a array profile é apenas usado no 
component CardList, assim podemos gerenciar o estado desse profiles dentro do próprio CardList. Mas lembrar que o component 
Form necessitará anexar um registro a esta array profiles, e ele não pode fazer isso se o proprietário da array é seu irmao, 
o componente CardList. **Para permitir ambos, o CardList e o Form, acessar o array Profiles, devemos colocar o profiles 
em um estado no componente que fica em cima, no Top-Level, que é o App.** Em um Class Component o state é gerenciado em 
memória na instancia, que o React associa com cada componente montado. Para inicializar o objeto state para o componente 
App, vamos usar o Constructor, usando o método super(), que é chamada por cada objeto instanciado, e esse constructor recebe 
uma instancia de props também. O método supor() é para honrar o contrato que existe entre a class App e a Class React.component
da qual ela extende. E uma vez que entramos no constructor, temos acesso ao objeto especial state que o React usa para gerenciar 
cada class component. Vamos inicializar ele e colocar um objeto lá dentro. Ao contrário de useState nas function components, ess
state instance property, tem que ser um objeto. Não pode ser uma String ou um integer por exemplo. No nosso exemplo vamos 
colocar a array profiles dentro desse objeto. 
```
export class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            profiles : testData
        };
    }
  render() {
    return (
        <div>
          <div className="header">{this.props.title}</div>
            <Form/>
            <CardList profiles={this.state.profiles}/>
        </div>
    );
  }
}
```
E para ler esse novo elemento state, por que o CardList precisa dele,  nós podemos fluxiar ele usando `this.state.profiles`. 
**State é um objeto , e o profiles é uma propriedade desse objeto.**
Mas para usar state não precisamos de acessar o constructor. Existe uma sintaxe mais simples para esse código extra. Ou seja
podemos simplesmente fazer assim: 
```
export class App extends Component{
    state = {
        profiles : testData
    };
  render() {
    return (
        <div>
          <div className="header">{this.props.title}</div>
            <Form/>
            <CardList profiles={this.state.profiles}/>
        </div>
    );
  }
}
export default App;
```

### Taking input from the user
Para capturar a entrada de um usuário, **precisamos definir um event handler** na user interface. Podemos definir o evento 
onClick no botão, mas o instrutor preferiu usar o onSubmit event para Html form. Usando onSubmit podemos utilizar características 
nativas do form. Por exemplo, podemos fazer o input required. E vamos definir uma instance function para manusear esse evento. 
E vamos nomear ele de handleSubmit. Cada React event function recebe um event argument. Pode ser qualquer name. Esse é apenas
o último argumento que a function recebe. E para cada React event este argumento fica em torno do event nativo do javascript 
objeto. Todos os métodos disponíveis no event nativo do javascript também está disponível aqui. Aqui vamos prevenir o comportamento 
padrão de um formulário quando submetemos algo, que é dar um refresh na página. Vamos usar o `event.preventDefault`. 
Agora, para ler o valor que o usuário digitar lá no formulário, podemos usar a API do DOM normalmente. Podemos dar à input
uma ID e suar getElementById para pegar ele. **React tem uma propriedade especial chamada ref() onde nós podemos pegar 
uma referência a este elemento. Esse é tipo um ID que o React mantém em memória para cada elemento renderizado.** Para usar 
o ref precisamos instanciar um objeto. Podemos nomear de qualquer coisa, aqui vamos usar userNameInput, e vamos usar
`React.createRef`, e como esse Ref vai ser parte da instancia agora, lá no input simplesmente fazemos assim: ref={this.userNameInput}. E 
lá no handleSubmit vamos fazer um teste com console.log:
```
export class Form extends Component {
    userNameInput = React.createRef();
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(
            this.userNameInput.current.value
        );
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text" placeholder="GitHub username" 
                    ref={this.userNameInput}
                    required/>
                <button>Add cart</button>
            </form>
        );
    }
}
```
No entando React tem um outro método para trabalhar com este elemento input. Ele irá controlar seu valor diretamente através 
do React, ao invez de ler ele do DOM. Este método é muitas vezes chamado de controlled components, e tem algums vantagens sobre a propriedade Ref.
Mas ele requer um pouco mais de código. Primeiro vamos instroduzir um objeto state, e esse objeto nós definiremos um elemento para manusear 
o input value do username field. Vamos chamar userName. E ele vai ser inicializado com uma string vazia:
```
state = {userName: ``}
```
Assim vamos usar esse state elemento como value do elemento input., fazendo assim: value={this.state.userName}. E isso 
imediatamente criar um controlled element. Agora estamos controlando o valor do input. E para eu poder digitar lá no formulário
já que ele fica inativo, preciso event onChange. De modo que o DOM pode dizer ao React que algo mudou nesta input e o React deve
refletir na interface. E vamos usar uma function inline nesse event. Ela vai receber como argumento o objeto event, e ele necessita
fazer algo simples, mudar o value do userName state baseado no que o usuário digitou lá na interface. Para fazer isso 
em uma Class Component **vamos usar this.setState**e passar para ele um objeto que tem o novo estado. Nesse caso vamos passar
o userName e vamos pegar o valor que o usuário digitou diretamente no DOM. Vamos fazer isso usando `event.target.value`. 
Essa é a sintaxe que vamos usar quando queremos mudar o estado de uma classe component. É um pouco diferente do que function component Hooks
porque essa function é sempre chamado setState e sempre recebe um objeto e ela irá merge esse objeto com o estado atual do component. 
Se tudo estiver correto podemos acessar o valor fazendo assim: `this.state.userName`. 
```
export class Form extends Component {
    state = {
        userName: ''
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(
            this.state.userName
        );
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text" placeholder="GitHub username" value={this.state.userName}
                    onChange={event=>this.setState({userName:event.target.value})}
                    required/>
                <button>Add cart</button>
            </form>
        );
    }
}
```

### Working with Ajax Calls
Agora estamos prontos para pedir dados a api do github. Nesse exemplo vou usar a fetch api do javascript para fazer isso.  
Assim lá na function handleSubmition() no componente Form, vou fazer um fetch assim :
```
 handleSubmit = (event) =>{
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`).then((response)=>{
            if(response.status === 404){
                this.setState({userName: `ERROR | ${response.statusText} `})
             } else {
                response.json().then((data)=>{
                    console.log(data)
                })
            }
        });
    };
```
Notar que o response alí em cima, tem um data atribute que tem as informações sobre o profile, assim poderiamos ter feito 
assim: `response.data`. Agora tudo que a gente preica fazer é append este data que a gente pegou lá na array profiles, que 
está na componente App. E quando fizermos isso, o React irá renderizar novamente o componente App e mostra o novo Github 
profile. **No entando o componente Form não pode acessar o Profiles State elements diretamente, porque os componentes React 
tem um one-way flod of data**, e um componente não pode mudar o estado de seu pai. Mas lembrar que o component App pode 
passar propriedades para seu componente filho no caso form, e essas propriedades podem ser simples primitive values 
ou function references. Assim se o App component passar um function reference para o form, podemos mudar o estado do 
componente App nessa function, e o component Form irá ser capaz de invocar essa function porque ela será parte do 
objeto props. Assim lá no App vamos criar uma function addNewProfile e por enquando esta function irá simplesmente receber
uma nova profile data como argument, vamos chamar de profileData e irá fazer algo com isso. Por hora, vamos apenas fazer 
um console.log(). 
Então lá na chamada do componente form, <Form />, vamos passar o new prop, e vamos chamála de onSubmit, e passar this.addNewProfile:
```
export class App extends Component{
    state = {
        profiles : []
    };
    addNewProfile = (profileData) =>{
        console.log(`App -> ${profileData}`);
    };
  render() {
    return (
        <div>
          <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
        </div>
    );
  }
}
export default App;
```
Assim, o addNewProfile é uma function que nós definimos na instancia desse componente, e lá no App nós estamos fazendo ele disponível 
como uma new prop no Form component, assim lá dentro do handleSubmit ao invez de fazer um console.log, podemos acesssar o new prop 
que é parte do component Form agora, e vamos fazer assim:
```
handleSubmit = (event) =>{
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`).then((response)=>{
            if(response.status === 404){
                this.setState({userName: `ERROR | ${response.statusText} `})
             } else {
                response.json().then((data)=>{
                    this.props.onSubmit(data);
                })
            }
        });
    };
```
Assim o props ali mantém uma function reference, e essa function reference é um alias para o addNewProfile function no App
componente. Como argumento passamos o data atributos que está vindo fetch. 

Agora precisamos colocar esse novo profileData no state do componente App, e tudo que necessitamos fazer é append este objeto 
na array de objetos que temos armazenado lá no state, e para fazer isso temos algumas opções. Vamos invocar o setState que é 
uma function que necessitamos para mudar o state de uma class React e podemos passar um objeto ou uma function. Vamos passar 
uma function e ele nos dara acesso aos states e o que vamos retornar aqui a partir dessa function é o novo state. Observe 
que vou usar o spread operador que irá espalhar os profiles existentes que é algo que podemos ler assim: `...prevState.profiles`
e então append o new profileData. Essa operação é semelhante a fazer uma concatenação no profile array. Observe:
```
 addNewProfile = (profileData) =>{
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    };
``` 
uma coisa que podemos fazer depois que o usuário digitar o nome, é em seguida limpar ele, fazendo assim:
```
 fetch(`https://api.github.com/users/${this.state.userName}`).then((response)=>{
            if(response.status === 404){
                this.setState({userName: `ERROR | ${response.statusText} `})
             } else {
                response.json().then((data)=>{
                    this.props.onSubmit(data);
                    this.setState({userName: ''});
                })
            }
        });
```
E observe como colocar um erro alí se a pessoa não conseguir entrar com os dados. E temos uma questão aqui também. Antes,
quando eu abria o console do navegador, sempre era apresentado com um warning, não erro, observe essa 
[imagem](https://drive.google.com/open?id=1vkOThaisN8adOW9EiBf8qidtv2zdlOEN). Essa warning é sobre o Key prop. Esse Key prop
é algo React necessita sempre que renderiza uma lista de filhos como o que estamos fazendo no CardList, o React nos dá esse alerta 
que se eu não especificar algum tipo de identidade para estes elementos dinãmicos, então o react irá assumir que a posição 
deste elemento é sua identidade, e isso por causar problemas se eu começar a reordenar esses elemento. Para evitar questões como 
essa vamos passar a Key prop para o React, e ela tem que ser única nesse DOM particular. Assim os dados do Github vem com um ID 
que é único, assim vamos fazer `profile.id`
```
export function CardList (props) {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    )
}
```
Temos que tratar algumas coisas, mas por enquando para um nível de inicio está bom. O instrutor deixou um link 
que é seu livro sobre questões mais avançadas. Veja [aqui](https://jscomplete.com/react-beyond-basics)
Assim, esse app, vai ter um Card component que irá renderizar informações sobre o Github Profile, uma CardList component 
para converter uma array de registros em uma array de card components, o Form component que le a entrada do usuário e o 
App component que vai gerenciar a relação entre todos os outros componentes. Nós estamos gerenciando o array de records como 
um State element no top-level App component, que vai permitir a gente compartilhar dados entre múltiplos components, e ele 
permite-nos append um novo github profile na nossa UI simplesmente appending o Git Hup API response ao State Element. 
No componente Fomr nós exploramos como acessar o elemento no DOM a partir do React diretamente usando o ref atribute, e exploramos 
como ler os dados que o usuário entra usando State do React, com a ajuda do evento onChange. 