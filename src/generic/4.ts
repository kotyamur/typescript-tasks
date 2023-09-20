/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// Крок 1: Визначення інтерфейсу для типів властивостей компонента
interface ComponentProps {
  title: string;
  // Додайте інші властивості, які вам потрібні
}
// Крок 2: Використання інтерфейсу в класі Component
class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}
class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
// Приклад використання
const pageProps: ComponentProps = { title: "Sample Page" };
const page = new Page(pageProps);
page.pageInfo(); // Виведе "Sample Page"


class Component2<T> {
  constructor(public props: T) {}
}

class Page2 extends Component2<{title: string}> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// export {};