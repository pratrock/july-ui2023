async function draw(){
    //Data
    const dataset = await d3.json('data.json')

    const xAccessor = (d)=>d.currently.humidity
    const yAccessor = (d)=>d.currently.apparentTemperature
    const rAccessor =  (d)=>d.currently.windSpeed

    //Dimeansions
    let dimesions = {
        width:800,
        height:800,
        margin:{
            top:50,
            bottom:50,
            right:50,
            left:50
        }
    }
    dimesions.ctrWidth = dimesions.width - dimesions.margin.left - dimesions.margin.right
    dimesions.ctrHeight =  dimesions.height- dimesions.margin.top   - dimesions.margin.bottom
    //Scales 
    const xScale = d3.scaleLinear()
       .domain(d3.extent(dataset, xAccessor))
       .rangeRound([0, dimesions.ctrWidth])
       .clamp(true)
    const yScale = d3.scaleLinear()
       .domain(d3.extent(dataset, yAccessor))
       .rangeRound([dimesions.ctrHeight, 0])
       .nice()
       .clamp(true)

    //Draw Image
    const svg = d3.select('#chart')
       .append('svg')
       .attr('width', dimesions.width)
       .attr('height', dimesions.height)

    const tooltip = d3.select('#tooltip')

    const ctr = svg.append('g')
                .attr(
                    'transform',
                    `translate(${dimesions.margin.left}, ${dimesions.margin.top})`
                )
    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => xScale(xAccessor(d)))
        .attr('cy', d => yScale(yAccessor(d)))
        .attr('r', rAccessor)
        .attr('fill', 'red')
        .attr('temp', yAccessor)
        .on('mouseenter', function(event, data){
            d3.select(this)
            .attr('fill', '#120078')
            .attr('r', 8)
        tooltip.style('display', 'block')
                .style('top', yScale(yAccessor(data))-25+"px")
                .style('left', xScale(xAccessor(data))+"px")

        const formatter = d3.format('.2f')
        const dateFormatter = d3.timeFormat('%B %-d, %Y')
        
        tooltip.select('.metric-humidity span')
                .text(xAccessor(data))
        tooltip.select('.metric-humidity span')
                .text(formatter(yAccessor(data)))
        tooltip.select('.metric-date')
                .text(dateFormatter(data.currently.time))
        })
        .on('mouseleave', function(event){
            d3.select(this)
                .attr('fill', 'red')
                .attr('r', 5)

        tooltip.style('display', 'none')
        })

    // Axes
    const xAxis = d3.axisBottom()
                    .scale(xScale)
                    // .ticks(5)
                    // .tickValues([0.3,0.4, 0.6, 0.7, 0.9])
                    .ticks(6)
                    .tickFormat((d) => d*100+'%')

    const xAxisGroup = ctr.append('g')
       .call(xAxis)
       .style('transform', `translateY(${dimesions.ctrHeight}px)`)
       .classed('axis', true)
    
    xAxisGroup.append('text')
              .attr('x', dimesions.ctrWidth / 2)
              .attr('y', dimesions.margin.bottom - 10)
              .attr('fill','black')
              .text('Humidity')
    
    const yAxis = d3.axisLeft(yScale)

    const yAxisGroup = ctr.append('g')            
        .call(yAxis)
        .classed('axis', true)

    yAxisGroup.append('text')
                .attr('x', -dimesions.ctrHeight / 2)
                .attr('y', -dimesions.margin.left + 15)
                .attr('fill','black')
                .html('Temperature &deg; F')
                .style('transform', 'rotate(270deg)')
                .style('text-anchor', 'middle')

}
draw()