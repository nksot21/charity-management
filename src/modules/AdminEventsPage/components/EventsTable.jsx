import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { Input, Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { format } from "date-fns";
import MyDialog from "../../../globalComponents/Dialog/MyDialog";
import AddEventPopup from "./AddEventPopup";
import { Link, useNavigate } from "react-router-dom";
import AddDonationPopup from "./AddDonationPopup";
import { EventService } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../store/events";
import { useState } from "react";
import DistributionPopup from "./DistributionPopup";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Tiêu đề",
  },
  {
    id: "dateBegin",
    numeric: false,
    disablePadding: false,
    label: "Ngày bắt đầu",
  },
  {
    id: "dateEnd",
    numeric: false,
    disablePadding: false,
    label: "Ngày kết thúc",
  },
  {
    id: "amountNeeded",
    numeric: true,
    disablePadding: false,
    label: "Số tiền cần",
  },
  {
    id: "amountGot",
    numeric: true,
    disablePadding: false,
    label: "Số tiền nhận được",
  },
  {
    id: "donorsQuantity",
    numeric: true,
    disablePadding: false,
    label: "Số người quyên góp",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Loại",
  },
  {
    id: "amountDistributed",
    numeric: true,
    disablePadding: false,
    label: "Số tiền phân phát",
  },
  {
    id: "isDonating",
    numeric: false,
    disablePadding: false,
    label: "Đang nhận",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" style={{ backgroundColor: "#eee" }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ backgroundColor: "#eee" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, selected, onSearchChange } = props;
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [isDeletable, setIsDeletable] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isAddingDonation, setIsAddingDonation] = React.useState(false);
  const [isAddingDistribution, setIsAddingDistribution] = useState(false);
  const events = useSelector((state) => state.events.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedEvent = events.find((e) => e.id === selected[0]) || null;

  const [search, setSearch] = React.useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
    onSearchChange(event.target.value);
  };

  React.useEffect(() => {
    if (
      selected.findIndex((eventId) => {
        const event = events.find((e) => e.id === eventId);
        return event.amountGot !== event.amountDistributed;
      }) > -1
    ) {
      setIsDeletable(false);
    } else {
      setIsDeletable(true);
    }
  }, [selected]);

  const acceptDeleteHandler = async () => {
    console.log(selected);
    await Promise.all(
      selected.map(async (e) => {
        await EventService.deleteEvent(e)
          .then(() => {})
          .catch((e) => {
            throw e;
          });
      })
    );

    dispatch(fetchEvents());
    setOpenDeleteDialog(false);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} đã chọn
      </Typography>

      <Input
        placeholder="Tìm kiếm"
        size="small"
        value={search}
        onChange={searchChangeHandler}
        style={{ marginRight: "16px", minWidth: "200px", fontSize: 14 }}
      />

      {numSelected > 0 ? (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          {numSelected === 1 && (
            <>
              <Button
                variant="outlined"
                size="small"
                style={{ whiteSpace: "nowrap" }}
                onClick={() => navigate("/su-kien/" + selected[0])}
              >
                Xem chi tiết
              </Button>
              <Button
                variant="outlined"
                size="small"
                style={{ whiteSpace: "nowrap" }}
                onClick={() => setIsUpdating(true)}
              >
                Cập nhật
              </Button>
              <Tooltip
                title={
                  !selectedEvent.donating &&
                  "Sự kiện này không nhận quyên góp nữa!"
                }
              >
                <span>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ whiteSpace: "nowrap", backgroundColor: "#2AC48A" }}
                    onClick={() => setIsAddingDonation(true)}
                    disabled={!selectedEvent.donating}
                  >
                    Thêm quyên góp
                  </Button>
                </span>
              </Tooltip>

              <Tooltip
                title={
                  selectedEvent.donating
                    ? "Không phân phát được! Sự kiện này còn đang nhận quyên góp!"
                    : ""
                }
              >
                <span>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ whiteSpace: "nowrap", backgroundColor: "#E8AA42" }}
                    onClick={() => setIsAddingDistribution(true)}
                    disabled={selectedEvent.donating}
                  >
                    Thêm phân phát
                  </Button>
                </span>
              </Tooltip>
            </>
          )}

          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => setOpenDeleteDialog(true)}
          >
            Xóa
          </Button>
          {openDeleteDialog && (
            <>
              {isDeletable ? (
                <MyDialog
                  title="Cảnh báo"
                  message="Bạn có chắc chắn muốn xóa event này? Thao tác này không thể hoàn tác."
                  handleAccept={acceptDeleteHandler}
                  handleClose={() => setOpenDeleteDialog(false)}
                />
              ) : (
                <MyDialog
                  title="Cảnh báo"
                  message="Bạn không thể xóa sự kiện này vì đã có người quyên góp hoặc chưa phân phát hết số tiền đã quyên góp!"
                  handleAccept={() => setOpenDeleteDialog(false)}
                />
              )}
            </>
          )}
        </Stack>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
      {isAddingDonation && (
        <AddDonationPopup
          onCloseModal={() => {
            setIsAddingDonation(false);
          }}
          event={events.find((e) => e.id === selected[0])}
        />
      )}

      {isAddingDistribution && (
        <DistributionPopup
          openState={true}
          setOpenState={setIsAddingDistribution}
        />
      )}

      {isUpdating && (
        <AddEventPopup
          onCloseModal={() => {
            setIsUpdating(false);
          }}
          event={events.find((e) => e.id === selected[0])}
        />
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EventsTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const events = useSelector((state) => state.events.events);
  const [viewedEvents, setViewedEvents] = React.useState([]);

  console.log(events);

  React.useEffect(() => {
    setViewedEvents(events);
  }, [events]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = events.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - events.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(viewedEvents, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, viewedEvents]
  );

  const searchChangeHandler = (search) => {
    setViewedEvents(
      events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
          onSearchChange={searchChangeHandler}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={events.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        to={"/su-kien/" + row.id}
                        className=" text-decoration-none cursor  "
                        style={{ alignItems: "center" }}
                      >
                        {row.title.length > 80
                          ? row.title.slice(0, 80) + "..."
                          : row.title}
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      {format(new Date(row.dateBegin), "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell align="right">
                      {format(new Date(row.dateEnd), "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ fontWeight: 600, color: "#2AC48A" }}
                    >
                      {row.category?.name === "Tiền"
                        ? currencyFormatter.format(row.amountNeeded)
                        : row.amountNeeded + " " + row.category?.unit}
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        fontSize={"inherit"}
                        style={{ fontWeight: 600, color: "#2AC48A" }}
                      >
                        {row.category?.name === "Tiền"
                          ? currencyFormatter.format(row.amountGot)
                          : row.amountGot + " " + row.category?.unit}
                      </Typography>
                      <Stack
                        height={4}
                        style={{ backgroundColor: "#ddd" }}
                        borderRadius={2}
                        marginTop={"2px"}
                      >
                        <Stack
                          height={4}
                          width={row.amountGot / row.amountNeeded}
                          style={{ backgroundColor: "orange" }}
                          borderRadius={2}
                        ></Stack>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{row.donorsQuantity}</TableCell>
                    <TableCell align="right">{row.category?.name}</TableCell>
                    <TableCell
                      align="right"
                      style={{ fontWeight: 600, color: "#2AC48A" }}
                    >
                      {row.category?.name === "Tiền"
                        ? currencyFormatter.format(row.amountDistributed)
                        : row.amountDistributed + " " + row.category?.unit}
                    </TableCell>
                    <TableCell align="right">
                      <Checkbox
                        color="primary"
                        checked={row.donating}
                        disabled
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={"Số hàng mỗi trang"}
        />
      </Paper>
    </Box>
  );
}
