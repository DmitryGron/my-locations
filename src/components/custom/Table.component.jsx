import styled from 'styled-components';
import React from 'react';

const Table = styled.table`
	width: 100%;
	margin: 0;
	border-spacing: 0;
	border-collapse: collapse;
`;

const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding 2;
}
`;

const TableData = styled.td`
font-size: 3vh;
border: 1px solid LightGrey;
height: 100%;
text-align: center;
vertical-align: middle;
}

`;

const CustomTable = props => {
	console.log(props);
	return (
		<Table>
			<TableHead>All Categories</TableHead>
			<tbody>
				<tr>
					<TableData>Ctaegory</TableData>
				</tr>
				{props.categories.map(category => (
					<tr>
						<TableData>{category.categoryName}</TableData>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default CustomTable;
