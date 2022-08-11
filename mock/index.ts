const modules = import.meta.globEager('./**/*.{js,ts}')
function useMock() {
  Object.keys(modules).forEach((it) => {
    modules[it]
  })
}

export default useMock
