<template>
	<view>
		<view class="cu-card case" :class="isCard ? 'no-card':''">
			<view class="cu-item shadow">
				<view class="image">
					<image :src="coverImgSrc"  mode="widthFix"> </image>
					<view v-if="cuTag" class="cu-tag bg-blue">{{cuTag}}</view>
					<view class="cu-bar bg-shadeBottom"> <text v-if="content" class="text-cut">{{content}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url(' + avatarImgSrc + ');'"></view>
						<view class="content flex-sub">
							<view class="text-grey">{{userName}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{time}}
								<view class="text-gray text-sm">
									<text v-if="seeNum" class="cuIcon-attentionfill margin-lr-xs"></text> {{seeNum}}
									<text v-if="assistNum" class="cuIcon-appreciatefill margin-lr-xs"></text> {{assistNum}}
									<text v-if="discussNum" class="cuIcon-messagefill margin-lr-xs"></text> {{discussNum}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			coverImgSrc: {
				type: String,
				default: '',
			},
			cuTag: {
				type: String,
				default: '标签'
			},
			content: {
				type: String,
				default: ''
			},
			avatarImgSrc: {
				type: String,
				default: ''
			},
			userName: {
				type: String,
				default: ''
			},
			time: {
				type: String,
				default: ''
			},
			seeNum: {
				type: [Number, String],
				default: 0
			},
			assistNum: {
				type: [Number, String],
				default: 0
			},
			discussNum: {
				type: [Number, String],
				default: 0
			},
			isCard: {
				type: Boolean,
				default: false
			}
		},

		mounted() {
		},
		data() {
			return {
				
			};
		},
		methods: {
		}
	}
</script>

<style>

</style>
