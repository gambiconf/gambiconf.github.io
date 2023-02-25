<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<div class="root">
	<div class="month"><Localized id="calendar--month" /></div>

	<span><Localized id="calendar--sunday" /></span>
	<span><Localized id="calendar--monday" /></span>
	<span><Localized id="calendar--tuesday" /></span>
	<span><Localized id="calendar--wednesday" /></span>
	<span><Localized id="calendar--thursday" /></span>
	<span><Localized id="calendar--friday" /></span>
	<span><Localized id="calendar--saturday" /></span>

	<span />
	<span />
	<span />
	<span />
	<span />
	<span>1</span>
	<span class="highlighted-day">2</span>
	<span class="highlighted-day">3</span>
	<span>4</span>
	<span>5</span>
	<span>6</span>
	<span>7</span>
	<span>8</span>
	<span>9</span>
	<span>10</span>
	<span>11</span>
	<span>12</span>
	<span>13</span>
	<span>14</span>
	<span>15</span>
	<span>16</span>
	<span>17</span>
	<span>18</span>
	<span>19</span>
	<span>20</span>
	<span>21</span>
	<span>22</span>
	<span>23</span>
	<span>24</span>
	<span>25</span>
	<span>26</span>
	<span>27</span>
	<span>28</span>
	<span>29</span>
	<span>30</span>
	<span>31</span>
</div>

<style>
	.root {
		color: white;
		font-size: 1rem;

		width: 315px;
		background: #332f2e;
		border-radius: 5px;
		overflow: hidden;

		padding: 0 10px 10px 10px;
		box-sizing: border-box;
		background-color: #0271b8;
	}

	.month {
		margin-top: 18px;
		text-transform: uppercase;
		text-align: center;
	}

	.root span {
		float: left;
		width: 42px;
		height: 42px;
		text-align: center;
		line-height: 40px;
	}

	.highlighted-day {
		color: #ff8915;
		font-weight: bold;

		border: 1px solid #ff8915;
		border-radius: 50%;
		box-sizing: border-box;
	}
</style>
