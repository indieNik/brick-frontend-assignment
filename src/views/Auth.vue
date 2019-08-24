<template>
  <div class="login">
	<h2>Login</h2>
	<form>
		<div class="form-field">
			<label for="email" >E-Mail Address</label>
			<input id="email" type="email" v-model="email" required autofocus>
		</div>
		<div class="form-field">
			<label for="password" >Password</label>
			<input id="password" type="password" v-model="password" required>
		</div>
		<div class="form-field">
			<button type="submit" @click="handleSubmit">
				Login
			</button>
		</div>
	</form>
	<p v-if="errors.length">
		<b>Please correct the following error(s):</b>
		<ul class="errors">
			<li v-for="error in errors">{{ error }}</li>
		</ul>
	</p>
  </div>
</template>

<style lang="scss" scoped>
    .login {
		width: 30vw;
		height: 40vh;
		margin: auto;
		margin-top: calc(40vh - 60px);
		padding: 20px;
		flex-direction: column;
		background-color: #fcfcfc;
		box-shadow: 0px 0px 10px 5px #bf3d1a0f;
		form {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
			transition: all 0.3s ease-in-out;
			.form-field {
				margin: 10px 0;
				width: 100%;
				input {
					display: block;
					border: 2px solid #bf3d1a0f;
					width: 100%;
					height: 40px;
				}
				button {
					border: 2px solid #bf3d1a50;
					padding: 10px;
					width: 100px;
					color: #bf3d1a50;
					font-weight: 500;
					&:hover {
						background-color: #bf3d1a50;
						color: #fff;
					}
				}
			}
		}
		.errors {
			li{
				color: #bf3d1a;
			}
		}
    }
</style>

<script>
	export default {
        data(){
            return {
				errors: [],
                email : "",
                password : ""
            }
        },
        methods : {
            handleSubmit: function(e){
				e.preventDefault()

				let user = localStorage.getItem('isLoggedInUser');
				console.log("User before auth: ",  JSON.parse(user));
				this.errors = [];
				
				if (!this.email) {
					this.errors.push('Email required.');
				} else if (!this.validEmail(this.email)) {
					this.errors.push('Valid email required.');
				}
				if (this.password.length <= 0) {
					this.errors.push('Password is required.');
				}

				if(!this.errors.length) {
					localStorage.setItem('isLoggedIn', true);
					localStorage.setItem('isLoggedInUser',JSON.stringify
						(
							{
								email: this.email,
								password: this.password
							}
						)
					)
					if(this.$route.params.nextUrl != null){
						this.$router.push(this.$route.params.nextUrl)
					} else {
						this.$router.push('/')
					}
				} else {
					localStorage.setItem('isLoggedIn', false);
					localStorage.setItem('isLoggedInUser', "");
				}
			},

			validEmail: function (email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
        }
    }
</script>