import FormBuilderLayout from '../../components/layouts/FormBuilderLayout';
import CellRenderer from '../../components/tableView/CellRenderer';
// tableView/CellRenderer'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function AgGrid() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();

  const onCellRender = (params) => {
    return '<h1>' + params.value + '</h1>';
  }

  const [columnDefs, setColumnDefs] = useState([
    {field: 'make'},
    {field: 'model', cellRenderer: CellRenderer},
    {field: 'price'}
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true
  }));

  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, []);

  const getSimpleCellRenderer = (evt) => {
    console.log('getSimpleCellRenderer: evt: ', evt)
  }

  const buttonListener = useCallback( e => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <FormBuilderLayout>
      <div className="p-2 flex flex-col w-full h-full bg-slate-300">
        <div className="flex-grow bg-white">
          <div className="ag-theme-alpine"
            style={{ height: 0, minHeight: '100%', overflowY: 'auto' }}>
            <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API
              rowData={rowData} // Row Data for Rows
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              components={{simpleCellRender: getSimpleCellRenderer()}}
              rowSelection="multiple" // Options - allows click selection of rows
              onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />
          </div>
        </div>
      </div>
    </FormBuilderLayout>
  )
}

export default AgGrid;
