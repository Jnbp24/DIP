function Subject() {
    const observers = []
    // Add new observer
    function registerObserver(observer) {
        return observers.push(observer);
    }

    // Unsubscribe from the subject
    function unsubscribeObserver(observer) {
        observers = observers.filter(obs => obs !== observer)
    }

    // Notify all observers
    function notifyObservers(notification) {
        observers.forEach(observer => observer(notification));
    }

    return{
        registerObserver,
        unsubscribeObserver,
        notifyObservers
    }
}

let subject = Subject();



subject.registerObserver(msg => console.log("Observer 1 received:", msg))
subject.registerObserver(msg => console.log("Observer 2 received:", msg))
subject.registerObserver(msg => console.log("Observer 3 received:", msg))

subject.notifyObservers("Hello!");
