var Table = React.createClass({
	render: function() {
		return (
			<BootstrapRow>			
				<p className="info">Found {this.props.filteredCount || 0} record(s)</p>
				<div className="table-responsive">
					<table className="table table-striped table-hover">
						<Head columns={this.props.columns} handleSortChange={this.props.handleSortChange} />
						<Body displayData={this.props.displayData} columns={this.props.columns} />			
					</table>
				</div>
			</BootstrapRow>
		);
	}
})

var Head = React.createClass({
	handleSortChange: function(column, event) {
		event.preventDefault();
		this.props.handleSortChange(column)	
	},
	render: function() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(function(column){//map函数返回一个新数组，数组中的元素为原始数组调用函数后的值
						return <th key={column}><a href="#" onClick={this.handleSortChange.bind(null, column)}>{column}</a></th>
						//href = "#"是一种临时链接的写法，说明当前这个链接不可用点击了也不会有用，还是会跳转到本页
						//.bind(thisArg[, arg1[, arg2[, ...]]])
						//thisArg:调用绑定函数时作为this参数传递给目标函数的值
						//若bind函数列表为空或者thisArg为null则执行作用域的this将被视为 thisArg
						//arg1..：当目标函数被调用时，被预置入绑定函数的参数列表中的参数
					}.bind(this))}
				</tr>
			</thead>//<thead>定义表头,<tr>定义行，<th>表头单元格，<td>标准单元格
		);
	}
})
                   
var Body = React.createClass({
	render: function() {
		return (
			<tbody>
				{this.props.displayData.map(function(r){
					return <Row data={r} columns={this.props.columns} />
				}.bind(this))}
			</tbody>
		);
	}
})

var Row = React.createClass({
	render: function() {
		return (
			<tr>
				{this.props.columns.map(function(h){
					return <td key={h}>{ this.props.data[h] }</td>
					//key属性帮助react识别哪些元素变了/新增/删除
				}.bind(this))}			
			</tr>
		);
	}
})

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

var GenericFilter = React.createClass({
	handleChange: function(event)
	{
		var filterValue = React.findDOMNode(this.refs.filterValue).value
		var filterColumn = React.findDOMNode(this.refs.filterColumn).value
		if(!filterValue || !filterColumn)
			return;

		this.props.handleFilterChange(filterColumn, filterValue);
	},
	render: function() {
		return (
			<BootstrapRow>
				<form className="form-inline">
					<div className="form-group">
						<label htmlFor="filterColumn">Filter Value</label>
						<select className="form-control" id="filterColumn" onChange={this.handleChange} ref="filterColumn">
							<option value="">Select column</option>
							{this.props.columns.map(function(c){
								return <option key={c} value={c}>{c}</option>
							})}
						</select>
					</div>
						<div className="form-group">
						<label htmlFor="filterValue">Filter Value</label>
						<input type="text" className="form-control" id="filterValue" onChange={this.handleChange} ref="filterValue" />
					</div>
				</form>
			</BootstrapRow>
		);
	}
})

var Pager = React.createClass({
	handlePaginationChange: function(page, event) {
		event.preventDefault();
		this.props.handlePaginationChange(page)	
	},
	render: function() {
		if(this.props.filteredCount < 50)
			return null;

		var currentPage = this.props.page;

		var showPages = 9
		var showPagesHalf = Math.floor(showPages / 2.0);
		var totalPages = Math.ceil(this.props.filteredCount / 50.0)
		var startIndex = Math.max(0, (currentPage > (totalPages - showPagesHalf) ? (totalPages - showPages) : (currentPage - showPagesHalf)));

		var pages = []
		var i = startIndex;
		for (; pages.length < Math.min(showPages, totalPages); i++) {
			pages.push({display : i + 1, page : i})
		}

		if(startIndex > 0)
			pages.unshift({display: "...", page: Math.ceil(startIndex / 2.0) })
		if(i < totalPages)
			pages.push({display: "...", page: Math.floor(i + ((totalPages - i) / 2.0))})
		return (
			<BootstrapRow>
				<nav>
					<ul className="pagination">
						<li>
							<a href="#" onClick={this.handlePaginationChange.bind(null, 0)}>First</a>
						</li>
						<li>
							<a href="#" aria-label="Previous" onClick={this.handlePaginationChange.bind(null, "-1")}>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						{pages.map(function(i){
							var active = currentPage == i.page ? "active" : null;				
							return <li className={active} key={i.page}><a href="#" onClick={this.handlePaginationChange.bind(this, i.page)}>{i.display}</a></li>
						}.bind(this))}
						<li>
							<a href="#" aria-label="Next" onClick={this.handlePaginationChange.bind(null, "+1")}>
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
						<li>
							<a href="#" onClick={this.handlePaginationChange.bind(null, totalPages - 1)}>Last</a>
						</li>
					</ul>
				</nav>
			</BootstrapRow>
		);
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
				<a href="visulization.html">
					<button>go visulization</button>
				</a>
				<CSVInput handleFileChange={this.handleFileChange} data={this.state.data} />
				<GenericFilter handleFilterChange={this.handleFilterChange} columns={this.state.columns}/>
				<Table displayData={this.state.displayData} columns={this.state.columns} handleSortChange={this.handleSortChange} filteredCount={this.state.filteredCount} />
				<Pager filteredCount={this.state.filteredCount} page={this.state.page} handlePaginationChange={this.handlePaginationChange} />
				
			</Wrapper>
		);
	}
})

React.render(
	<Interface />,
	document.getElementById('content')
	);   