<template>
  <div class="modal-login">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control w-75"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control w-75"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-login {
  position: fixed;
  top: 25%;
  left: 35%;

  width: 600px;
  height: 400px;
  border-radius: 50px;
  background-color: rgb(133, 133, 133, 0.9);

  display: flex;
  justify-content: center;
}
</style>