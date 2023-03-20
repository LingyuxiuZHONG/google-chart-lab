
var BootstrapRow = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					{this.props.children}
				</div>
			</div>
		);
	}
})

var CSVInput = React.createClass({
	handleChange: function(e){
		var file = React.findDOMNode(this.refs.csv).files[0];//findDOMNode来获取真实的DOM节点，虚拟DOM无法拿到输入
		//this.refs.csv指向虚拟DOM的子节点，然后通过findDOMNode来获得真实DOM节点
		if(!file)
			return;

		this.props.handleFileChange(file);
	},
	render: function() {
		return (
			<BootstrapRow>
				<form className="form-inline">
					<div className="form-group">
						<label htmlFor="file">CSV File</label>
						<input type="file" className="form-control" id="file" accept=".csv" onChange={this.handleChange} ref="csv" />
					</div>
				</form>			
			</BootstrapRow>
		);//<form>用于为用户输入创建表单，表单用于向服务器传输数据，设置了ref = "csv"则可以通过this.refs.csv获得DOM节点
		//<input>onChange事件会在改变input输入框内容时执行一段js代码
	}
})

var GoogleCharts2 = React.createClass({
	countCrime:function(){
		var count = [];
		var data = this.props.data;
		var ct = 0;
		var dc = 0;
		var ma = 0;
		var md = 0;
		var me = 0;
		var nh = 0;
		var nj = 0;
		var ny = 0;
		var oh = 0;
		var pa = 0;
		var ri = 0;
		var sd = 0;
		var va = 0;
		var wi = 0;
		if(data != 0){
			count.push(['State','Crime']);
			for(var i = 0;i < data.length;i++){
				if(data[i]["state"] == "CT"){
					ct = ct + data[i]["totalCrime"];
				}else if(data[i]["state"] == "DC"){
					dc = dc + data[i]["totalCrime"];
				}else if(data[i]["state"] == "MA"){
					ma = ma + data[i]["totalCrime"];
				}else if(data[i]["state"] == "MD"){
					md = md + data[i]["totalCrime"];
				}else if(data[i]["state"] == "ME"){
					me = me + data[i]["totalCrime"];
				}else if(data[i]["state"] == "NH"){
					nh = nh + data[i]["totalCrime"];
				}else if(data[i]["state"] == "NJ"){
					nj = nj + data[i]["totalCrime"];
				}else if(data[i]["state"] == "NY"){
					ny = ny + data[i]["totalCrime"];
				}else if(data[i]["state"] == "OH"){
					oh = oh + data[i]["totalCrime"];
				}else if(data[i]["state"] == "PA"){
					pa = pa + data[i]["totalCrime"];
				}else if(data[i]["state"] == "RI"){
					ri = ri + data[i]["totalCrime"];
				}else if(data[i]["state"] == "SD"){
					sd = sd + data[i]["totalCrime"];
				}else if(data[i]["state"] == "VA"){
					va = va + data[i]["totalCrime"];
				}else if(data[i]["state"] == "WI"){
					wi = wi + data[i]["totalCrime"];
				}
			}
			count.push(['CT',ct]);
			count.push(['DT',dc]);
			count.push(['MA',ma]);
			count.push(['MD',md]);
			count.push(['ME',me]);
			count.push(['NH',nh]);
			count.push(['NJ',nj]);
			count.push(['NY',ny]);
			count.push(['OH',oh]);
			count.push(['PA',pa]);
			count.push(['RI',ri]);
			count.push(['SD',sd]);
			count.push(['VA',va]);
			count.push(['WI',wi]);
		}
		return count;

	},

    drawChart:function(){
		console.log(this);
		if(this.countCrime() != 0){
			const data = google.visualization.arrayToDataTable(this.countCrime());
			const options = {
				region:'US',
				resolution:'provinces'
			};
			console.log(data);
			var chart = new google.visualization.GeoChart(document.getElementById('GeoChart'));
			chart.draw(data,options);
			
		}
	},
	render:function(){
		google.charts.load('current', {
			'packages':['geochart'],
		  });
		google.charts.setOnLoadCallback(this.drawChart());
		return null;

	}
})

var GoogleCharts1 = React.createClass({
    crime:function(){
        var crimeArray = [];
		var data = this.props.data;
		var murders = 0;
		var rapes = 0;
		var robberies = 0;
		var assaults = 0;
		var burglaries = 0;
		var larcenies = 0;
		var autoTheft = 0;
		var arsons = 0;
		var sum = 0;
		if(data != 0){
			crimeArray.push(["crime","per"]);
			for(var i = 0;i < data.length;i++){
				murders = murders + data[i]["murders"];
				rapes = rapes + data[i]["rapes"];
				robberies = robberies + data[i]["robberies"];
				assaults = assaults + data[i]["assaults"];
				burglaries = burglaries + data[i]["burglaries"];
				larcenies = larcenies + data[i]["larcenies"];
				autoTheft = autoTheft + data[i]["autoTheft"];
				arsons = arsons + data[i]["arsons"];
			}
			sum = murders + rapes + robberies + assaults + burglaries + larcenies + autoTheft + arsons;
			
			crimeArray.push(["murders",murders / sum * 100]);
			crimeArray.push(["rapes",rapes / sum * 100]);
			crimeArray.push(["robberies",robberies / sum * 100]);
			crimeArray.push(["assaults",assaults / sum * 100]);
			crimeArray.push(["burglaries",burglaries / sum * 100]);
			crimeArray.push(["larcenies",larcenies / sum * 100]);
			crimeArray.push(["autoTheft",autoTheft / sum * 100]);
			crimeArray.push(["arsons",arsons / sum * 100]);
			
		}
		return crimeArray;
    },
    
    drawChart: function() {
		console.log(this);
        // Define the chart to be drawn.
        if(this.crime()!= 0){
			
            const data = google.visualization.arrayToDataTable(this.crime());
        
             // Set chart options
            const options = {
                colorAxis: {colors: ['#b4dae3', 'white', '#05a4c8']},
            };
        
            // Here we have to pass an ID ov div where we want to append a chart.
            var chart = new google.visualization.PieChart(document.getElementById ('PieChart'));
        
            chart.draw(data, options);
            
            
        }
        
        return null;
    },
    render: function(){
		google.charts.load('current', {packages: ['corechart']});  
        google.charts.setOnLoadCallback(this.drawChart());
        return null;
    }
})


var Wrapper = React.createClass({
	onDragEnter : function(event) {
		event.stopPropagation();
		event.preventDefault();
	},
	onDragOver : function(event) {
		event.stopPropagation();
		event.preventDefault();
	},
	onDrop: function(event){
		event.stopPropagation();
		event.preventDefault();

		var dt = event.dataTransfer;
		var files = dt.files;

		if(files && files.length && files[0])
			this.props.handleFileChange(files[0]);
	},
	render: function() {
		return (
			<div style={{ height: "100%" }} onDrop={this.onDrop} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver}>
				{this.props.children}
			</div>
		);//{this.props.children} It contains the content between the opening and closing tags of a component
		//This is used mostly in some wrapper component by which we have to pass the data onto the next component 
		//and also the data which we pass its static data ( in most cases ) 
		//because for dynamic data there is another way to pass props to the component. 
	}
})


var Interface = React.createClass({
	getFileSelectState: function(data, state)
	{
		//data.data = this.cleanData(data.data);
		state.data = this.cleanData(data.data,data.meta.fields);//array
		state.columns = data.meta.fields;//data.meta.fields:Array of field names
		state.totalCount = state.data.length;

		return this.getFilterChangeState(null, null, state);
	},
	getFilterChangeState: function(column, value, fileState)
	{
		if(column && value)
		{
			var loweredFilter = value.toLowerCase();
			var filtered = fileState.data.filter(function(d){//array中每个元素都会执行这个函数，d为当前元素的值

				return d[column] && (d[column].toString().toLowerCase().indexOf(loweredFilter) > -1)
			});//filter函数返回值为一个数组，包含了符合条件的所有元素
			fileState.filteredData = filtered;
			fileState.filteredCount = filtered.length;
		}
		else//没筛选	
		{
			fileState.filteredData = fileState.data;
			fileState.filteredCount = fileState.totalCount;
		}

		return this.getSortChangeState(null, fileState);
	},
	getSortChangeState: function(col, filterState)
	{
		if(!col)
		{
			col = filterState.sort.slice(1);
			var desc = filterState.sort[0] == "-";
		}
		else
		{
			var desc = filterState.sort.slice(1) == col && filterState.sort[0] != "-";		
		}

		filterState.sortedData = filterState.filteredData.sort(function(a, b) {
			return a[col] == b[col] ? 0 : (a[col] < b[col] ? -1 : 1) * (desc ? -1 : 1);
		});
		filterState.sort = (desc ? "-" : "+") + col;


		return this.getPaginationChangeState(0, filterState);
	},
	getPaginationChangeState: function(page, sortState)
	{
		if(typeof page === "string")
		{
			if(page === "-1" && this.state.page > 0)
				page = sortState.page - 1;
			else if(page === "+1" && sortState.page < Math.floor(sortState.filteredCount / 50))
				page = sortState.page + 1;
			else
				page = sortState.page;
		}

		sortState.page = page;
		sortState.displayData = sortState.sortedData.slice(page * 50, (page + 1) * 50);
		return sortState;
	},
	handleDrop: function(event)
	{
		event.preventDefault();
	},
	handleFileChange: function(file)
	{
		Papa.parse(file, {
			header: true,//If true, the first row of parsed data will be interpreted as field names.
			dynamicTyping: true,//If true, numeric and boolean data will be converted to their type instead of remaining strings. 
			complete: this.handleDataChange//The callback to execute when parsing is complete. It receives the parse results.
			//results structure
			// {
			// 	data:   // array of parsed data
			// 	errors: // array of errors
			// 	meta:   // object with extra info
			// }
		});//file is a File object obtained from the DOM
	},
	handleDataChange: function(data){
		this.setState(this.getFileSelectState(data, this.state));
	},
	handleFilterChange: function(column, value){
		this.setState(this.getFilterChangeState(column, value, this.state));
	},
	handleSortChange: function(col) {
		this.setState(this.getSortChangeState(col, this.state));
	},
	handlePaginationChange: function(page){
		this.setState(this.getPaginationChangeState(page, this.state));
	},
	cleanData:function(data,columns){
		return data.filter(function(row){
			row[columns[0]] = row[columns[0]].toUpperCase();
			for(var i = 0;i < columns.length;i++){
				if(row[columns[i]] === '' || row[columns[i]] === null)return false;
			}
			return true;
		});
	},
	getInitialState: function() {
		return {
			data: [],
			filteredData: [],
			sortedData: [],
			displayData: [],
			columns: [],
			totalCount: 0,
			filteredCount: 0,
			page: 0,
			sort: "+yearID"
		}
	},
	render: function() {
		return (
			<Wrapper handleFileChange={this.handleFileChange}>
				<h1>Visulization</h1>
				<a href="dashboard.html">
					<button>go dashboard</button>
				</a>
				<CSVInput handleFileChange={this.handleFileChange} data={this.state.data} />
				<h2>All Kinds Of Crimes Percentage</h2>
                <div id="PieChart"></div>
                <GoogleCharts1 data={this.state.data} getCrimeSum={this.getCrimeSum}/>
				<h2>The Total Crimes In Different States</h2>
				<div id="GeoChart"></div>
				<GoogleCharts2 data={this.state.data}/>
			</Wrapper>
		);
	}
})
React.render(
	<Interface />,
	document.getElementById('content')
	);   