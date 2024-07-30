<style>
	 @import '@/assets/css/custom.css';
</style>

<template>
    <div>
        <Breadcrumbs main="" title="Users" />
		
			<div class="card">
				<div class="card-body" style="background-color: #D3D3D3;">

					<div class="col-md-12 filter-sort">
						<div class="row">
							<div class="col-md-12">
								<label class="contol-label" style="font-weight: 600; font-size: large;">Search</label>
								<input type="text" class="form-control" placeholder="search name/designation/department" v-model="keyword" @keyup="fetchUsers()"/>
							</div>
						</div>
					</div>

					<div class="row" v-if="Boolean(users.length)">
						<div class="col-md-6" v-for="(user) in users" :key="user.id">
							<div class="card ">
								<div class="card-body">
									<span class="mb-2" style="font-size: larger; font-weight: 600;">
										{{ user.name }}
									</span> <br>
									<span class="mb-1" style="font-size: large; font-weight: 500">
										{{ user.designation_name }}
									</span><br>
									<span class="mb-1" style="font-size: medium; font-weight: 450">
										{{ user.department_name }}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="row" v-else>
						<span class="mb-2" style="font-size: larger; font-weight: 500;" align="center">No Data Found</span>
					</div>

				</div>
			</div>

			

	</div>
</template>

<script>
import '@/assets/css/custom.css';

	export default {
		name: "Dashbord1",

		data() {

				const now = new Date()
				const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
				const today_str = new Date().toJSON().slice(0,10).replace(/-/g,'-')
				const minDate = new Date('2021-01-01') 

			return {
				
				errors: {}, 
				token : "",

				start_date: '2023-01-01',
				end_date: today_str,

				listing_length: 10,
				keyword: "",

				users: [],
				
			};

		},

		created() {
			this.fetchUsers();
		},
		
		methods: {

			// getToken() {
			// 	if (localStorage.getItem('user_token')) {
			// 		var user_token =  JSON.parse(localStorage.getItem('user_token')); 
					
			// 		if(user_token.token) {

			// 			this.token = user_token.token;
			// 			this.user = user_token;

			// 		} else {
			// 			this.$swal("", "Failed to fetch token, please login again", "error");
			// 			this.$router.push({ name: "login" });
			// 		}

			// 	} else {
			// 		this.$swal("", "Session expired, please login again", "error");
			// 		this.$router.push({ name: "login" });
			// 	}
          	// },

			fetchUsers(page_url = null)
			{
				let url = "api/users?&limit=" + this.listing_length + "&keyword=" + this.keyword; 
				page_url = page_url || url;

				this.$axios
					.get(page_url, { heasers: {Autherization: "Bearer" + this.token} })
					.then((res) => {
						var responseData = res.data.data;
						this.users = responseData.users.data;
						console.log(responseData);
						console.log(this.users);
					})
					.catch((err) => console.log(err));
			},
			
		},
		
	};
</script>

