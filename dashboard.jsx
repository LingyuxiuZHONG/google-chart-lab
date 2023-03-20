
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

var Checkbox = React.createClass({
	check: function(e){
        var arr = document.getElementsByName("CheckBox"); 
        var filter = this.props.data;
        var flag = [false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,
            false,false,false,]
        for(var n=0;n <arr.length;n++){ 
            if(arr[n].checked==true){
                flag[n] = true;
            }
        }
        
        if(flag[0]){
            this.state.fidata.filter(function(row){
                if(row["population"] < 100000){
                    return true;
                }
                return false;
            })
        }
        if(flag[1] == true){
            this.state.fidata.filter(function(row){
                if(row["population"] > 100000 && row["population"] < 200000){
                    return true;
                }
                return false;
            })
        }
        if(flag[2] == true){
            this.state.fidata.filter(function(row){
                if(row["population"] > 20000 && row["population"] < 500000){
                    return true;
                }
                return false;
            })
        }
        if(flag[3] == true){
            this.state.fidata.filter(function(row){
                if(row["population"] > 50000){
                    return true;
                }
                return false;
            })
        }
        if(flag[4] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 30){
                    return true;
                }
                return false;
            })
        }
        if(flag[5] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 60 && row["racePctWhite"] > 30){
                    return true;
                }
                return false;
            })
        }
        if(flag[6] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 90 && row["racePctWhite"] > 60){
                    return true;
                }
                return false;
            })
        }
        if(flag[7] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctWhite"] > 90){
                    return true;
                }
                return false;
            })
        }  
        if(flag[8] == true){
            this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 10){
                    return true;
                }
                return false;
            })
        }   
        if(flag[9] == true){
            this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 20 && row["racepctblack"] > 10){
                    return true;
                }
                return false;
            })
        } 
        if(flag[10] == true){
            this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 50 && row["racepctblack"] > 20){
                    return true;
                }
                return false;
            })
        }     
        if(flag[11] == true){
            this.state.fidata.filter(function(row){
                if(row["racepctblack"] > 50){
                    return true;
                }
                return false;
            })
        }       
        if(flag[12] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 2){
                    return true;
                }
                return false;
            })
        } 
        if(flag[13] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 4 && row["racePctAsian"] > 2){
                    return true;
                }
                return false;
            })
        }  
        if(flag[14] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 10 && row["racePctAsian"] > 4){
                    return true;
                }
                return false;
            })
        }  
        if(flag[15] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctAsian"] >10){
                    return true;
                }
                return false;
            })
        }  
        if(flag[16] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 5){
                    return true;
                }
                return false;
            })
        }  
        if(flag[17] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 20 && row["racePctHsian"] > 5){
                    return true;
                }
                return false;
            })
        }  
        if(flag[18] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 50 && row["racePctHsian"] > 20){
                    return true;
                }
                return false;
            })
        }  
        if(flag[19] == true){
            this.state.fidata.filter(function(row){
                if(row["racePctHsian"] > 50){
                    return true;
                }
                return false;
            })
        }  
    
        this.props.filterData = filter;
        console.log(this.props.filterData);
                

	},
	render: function() {
		return (
			<BootstrapRow>
				<h3>The Population</h3>
                <input type="checkbox" name="CheckBox" value="checked1" >
                    0 ~ 100,000
                </input>
                <input type="checkbox" name="CheckBox" value="checked2" >
                    100,000 ~ 200,000
                </input>
                <input type="checkbox" name="CheckBox" value="checked2">
                    200,000 ~ 500,000
                </input>
                <input type="checkbox" name="CheckBox"value="checked2" >
                    More than 500,000 
                </input>
                

                <h3>The Race</h3>
                <h4>White Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 30%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    30% ~ 60%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    60% ~ 90%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 90%
                </input>
                
                <h4>Black Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 10%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    10% ~ 20%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    20% ~ 50%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 50%
                </input>
                
                <h4>Asian Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 2%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    2% ~ 4%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    4% ~ 10%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 10%
                </input>
                
                <h4>Hisparics Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 5%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    5% ~ 20%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    20% ~ 50%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 50%
                </input>
                <br>
                <button onClick={this.check}>confirm</button>
                </br>	
                	
			</BootstrapRow>
		);
	}
})



var GoogleCharts1 = React.createClass({
    dealData:function(){
        var arr = [];
        var murders = [0,0,0];
		var rapes = [0,0,0];
		var robberies = [0,0,0];
		var assaults = [0,0,0];
		var burglaries = [0,0,0];
		var larcenies = [0,0,0];
		var autoTheft = [0,0,0];
		var arsons = [0,0,0];
        if(this.state.data == 0){
            this.state.data = this.props.data;
            this.state.fidata = this.props.data;
        }
        if(this.state.fidata != 0){
            arr.push(['murder','rape','robbery','assault','burglary','larcenies','autoTheft','arson',{role:'annotation'}]);
            for(var i = 0;i < this.state.fidata.length;i++){
                
                if(this.state.fidata[i]["pctWRetire"] < 15){
                    murders[0] += this.state.fidata[i]["murders"];
                    rapes[0] += this.state.fidata[i]["rapes"];
                    robberies[0] += this.state.fidata[i]["robberies"];
                    assaults[0] += this.state.fidata[i]["assaults"];
                    burglaries[0] += this.state.fidata[i]["burglaries"];
                    larcenies[0] += this.state.fidata[i]["larcenies"];
                    autoTheft[0] += this.state.fidata[i]["autoTheft"];
                    arsons[0] += this.state.fidata[i]["arsons"];
                }else if(this.state.fidata[i]["pctWRetire"] < 20){
                    murders[1] += this.state.fidata[i]["murders"];
                    rapes[1] += this.state.fidata[i]["rapes"];
                    robberies[1] += this.state.fidata[i]["robberies"];
                    assaults[1] += this.state.fidata[i]["assaults"];
                    burglaries[1] += this.state.fidata[i]["burglaries"];
                    larcenies[1] += this.state.fidata[i]["larcenies"];
                    autoTheft[1] += this.state.fidata[i]["autoTheft"];
                    arsons[1] += this.state.fidata[i]["arsons"];
                }else{
                    murders[2] += this.state.fidata[i]["murders"];
                    rapes[2] += this.state.fidata[i]["rapes"];
                    robberies[2] += this.state.fidata[i]["robberies"];
                    assaults[2] += this.state.fidata[i]["assaults"];
                    burglaries[2] += this.state.fidata[i]["burglaries"];
                    larcenies[2] += this.state.fidata[i]["larcenies"];
                    autoTheft[2] += this.state.fidata[i]["autoTheft"];
                    arsons[2] += this.state.fidata[i]["arsons"];
                }
            }
            arr.push(["<15",murders[0],rapes[0],robberies[0],assaults[0],burglaries[0],larcenies[0],autoTheft[0],arsons[0]])
            arr.push(["<15 and <20",murders[1],rapes[1],robberies[1],assaults[1],burglaries[1],larcenies[1],autoTheft[1],arsons[1]])
            arr.push([">20",murders[2],rapes[2],robberies[2],assaults[2],burglaries[2],larcenies[2],autoTheft[2],arsons[2]])
            
        }
       
        return arr;
    },
    check: function(){
        var arr = document.getElementsByName("CheckBox"); 
        var ans = [];
        var flag = [false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,
            false,false,false,]
        for(var n=0;n <arr.length;n++){ 
            if(arr[n].checked==true){
                flag[n] = true;
            }
        }
        this.state.fidata = this.props.data;
        if(flag[0]){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["population"] < 100000){
                    return true;
                }
                return false;
            })
        }
        if(flag[1] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["population"] > 100000 && row["population"] < 200000){
                    return true;
                }
                return false;
            })
        }
        if(flag[2] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["population"] > 20000 && row["population"] < 500000){
                    return true;
                }
                return false;
            })
        }
        if(flag[3] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["population"] > 50000){
                    return true;
                }
                return false;
            })
        }
        if(flag[4] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 30){
                    return true;
                }
                return false;
            })
        }
        if(flag[5] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 60 && row["racePctWhite"] > 30){
                    return true;
                }
                return false;
            })
        }
        if(flag[6] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctWhite"] < 90 && row["racePctWhite"] > 60){
                    return true;
                }
                return false;
            })
        }
        if(flag[7] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctWhite"] > 90){
                    return true;
                }
                return false;
            })
        }  
        if(flag[8] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 10){
                    return true;
                }
                return false;
            })
        }   
        if(flag[9] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 20 && row["racepctblack"] > 10){
                    return true;
                }
                return false;
            })
        } 
        if(flag[10] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racepctblack"] < 50 && row["racepctblack"] > 20){
                    return true;
                }
                return false;
            })
        }     
        if(flag[11] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racepctblack"] > 50){
                    return true;
                }
                return false;
            })
        }       
        if(flag[12] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 2){
                    return true;
                }
                return false;
            })
        } 
        if(flag[13] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 4 && row["racePctAsian"] > 2){
                    return true;
                }
                return false;
            })
        }  
        if(flag[14] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctAsian"] < 10 && row["racePctAsian"] > 4){
                    return true;
                }
                return false;
            })
        }  
        if(flag[15] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctAsian"] >10){
                    return true;
                }
                return false;
            })
        }  
        if(flag[16] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 5){
                    return true;
                }
                return false;
            })
        }  
        if(flag[17] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 20 && row["racePctHsian"] > 5){
                    return true;
                }
                return false;
            })
        }  
        if(flag[18] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctHsian"] < 50 && row["racePctHsian"] > 20){
                    return true;
                }
                return false;
            })
        }  
        if(flag[19] == true){
            this.state.fidata = this.state.fidata.filter(function(row){
                if(row["racePctHsian"] > 50){
                    return true;
                }
                return false;
            })
        }  
    

	},
    drawChart: function() {
        // Define the chart to be drawn.
        if(this.dealData()!= 0){
            var data = google.visualization.arrayToDataTable(this.dealData());
             // Set chart options
            const options = {
                width: 600,
                height: 400,
                legend: { position: 'top', maxLines: 3 },
                bar: { groupWidth: '75%' },
                isStacked: true,
            };
            var button = document.getElementById('b1');
            // Here we have to pass an ID ov div where we want to append a chart.
            var chart = new google.visualization.ColumnChart(document.getElementById ('ColumnChart'));
            chart.draw(data, options);
            button.onclick = () =>{
                data = google.visualization.arrayToDataTable(this.dealData());
                google.charts.load('current', {packages: ['corechart', 'bar']});
		        google.charts.setOnLoadCallback(this.drawChart());
                
            }
            
            
        }
        
        return null;
    },
    getInitialState: function() {
		return {
            data: [],
			fidata: [],
		}
	},
    render: function(){
        google.charts.load('current', {packages: ['corechart', 'bar']});
		google.charts.setOnLoadCallback(this.drawChart());
        return (
			<BootstrapRow>
				{/* <Checkbox data={this.data} filterData={this.filterData} />		 */}
                <h3>The Population</h3>
                <input type="checkbox" name="CheckBox" value="checked1" >
                    0 ~ 100,000
                </input>
                <input type="checkbox" name="CheckBox" value="checked2" >
                    100,000 ~ 200,000
                </input>
                <input type="checkbox" name="CheckBox" value="checked2">
                    200,000 ~ 500,000
                </input>
                <input type="checkbox" name="CheckBox"value="checked2" >
                    More than 500,000 
                </input>
                

                <h3>The Race</h3>
                <h4>White Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 30%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    30% ~ 60%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    60% ~ 90%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 90%
                </input>
                
                <h4>Black Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 10%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    10% ~ 20%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    20% ~ 50%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 50%
                </input>
                
                <h4>Asian Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 2%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    2% ~ 4%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    4% ~ 10%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 10%
                </input>
                
                <h4>Hisparics Race Percentage</h4>
                
                <input type="checkbox" onclick="changeRange();">
                    0% ~ 5%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    5% ~ 20%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    20% ~ 50%
                </input>
                <input type="checkbox" onclick="changeRange();">
                    More than 50%
                </input>
                <br>
                <button id="b1" onClick={this.check}>confirm</button>
                </br>	
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
        state.filteredData = this.cleanData(data.data,data.meta.fields);
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
	handleFilterChange: function(){

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
            sort: "+yearID",
		}
	},
	render: function() {
		return (
			<Wrapper handleFileChange={this.handleFileChange}>
				<h1>Dashboard</h1>
				<CSVInput handleFileChange={this.handleFileChange} data={this.state.data} />
                {/* <Checkbox data={this.state.data} filterData={this.state.filterData}/> */}
                
				<div id="ColumnChart"></div>
                <GoogleCharts1 data={this.state.data} />
			</Wrapper>
		);
	}
})
React.render(
	<Interface />,
	document.getElementById('content')
	);   