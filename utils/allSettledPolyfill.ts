if (Promise && !Promise.allSettled) {
  //@ts-expect-error
  Promise.allSettled = function <T>(promises) {
    return Promise.all(
      promises.map(function (promise: Promise<T>) {
        return promise
          .then(function (value) {
            return {state: 'fulfilled', value: value};
          })
          .catch(function (reason) {
            return {state: 'rejected', reason: reason};
          });
      }),
    );
  };
}

export {};
