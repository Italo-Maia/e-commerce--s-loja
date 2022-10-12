export const fetchData = (action, context) => new Promise(action())
                                        .then((response) => context.store.dispatch(response))
                                        .catch((e) => console.log(e));