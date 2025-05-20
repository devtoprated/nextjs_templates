"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CustomButton } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { LOADER_BTN } from "@/utilities/svgConstant";
import messageServices from "@/services/message.services";
import documentServices from "@/services/document.services";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import tasksService from "@/services/tasks.service";

export type MembersType = {
    uid: any;
    id: string;
    displayName: string;
    role: string;
    userId: string;
    profileImage?: string;
};

export type shareType = {
    users: string[];
    projectId: string;
    documentId: string;
};

export const SessionData = () => {
    const session = useSession();
    return session.data?.uid;
};

export function getInitials(fullName: string) {
    const nameArray = fullName?.split(" ");
    let initials = "";

    if (Array.isArray(nameArray)) {
        nameArray.forEach((word) => {
            const initial = word.charAt(0).toUpperCase();
            initials += initial;
        });
        return initials;
    } else {
        return "N/A";
    }
}

export const columns: ColumnDef<MembersType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected()
                    // ||
                    // (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "displayName",
        header: "All",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-2">
                    <Avatar className="w-11 h-11 rounded-lg">
                        {row && row.original?.profileImage ? (
                            <AvatarImage src={row.original?.profileImage} alt="profile" />
                        ) : (
                            <AvatarFallback className={cn("text-1xl bg-red-400 text-white")}>
                                {getInitials(row.getValue("displayName"))}
                            </AvatarFallback>
                        )}
                    </Avatar>
                    <div className="capitalize flex-1">
                        {SessionData() === row.original?.uid
                            ? "Me"
                            : row.getValue("displayName")}
                    </div>
                </div>
            );
        },
    },
];
type DataTableProps = {
    data: MembersType[];
    taskDetail: any;
    type: string;
};
export function UserForShareTask({
    data,
    taskDetail,
    type,
}: DataTableProps) {
    const session = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const queryClient = useQueryClient();
    const projectId = searchParams.get("id");
    const { toast } = useToast();
    const { closeModal } = useModal();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
     
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const shareMutation = useMutation({
        mutationFn: (data: shareType) => {
            return tasksService.shareTask(data.projectId, data.documentId, {
                users: data.users,
                esignDoc: false,
                senderId: session.data?.uid,
            });
        },
        onSuccess: (data: any) => {
            queryClient
                .invalidateQueries({
                    queryKey: ["TASKS_LIST", searchParams.get("id")],
                })
                .then(() => {
                    closeModal();
                    if (type === "SHARE") {
                        toast({
                            description: "Task shared!",
                            variant: "success",
                        });
                    }
                });
        },
        onError: (error: any) => {
            toast({
                description: error.response?.data.message || "Something went wrong",
                variant: "destructive",
            });
        },
    });

    const handleShareDocument = () => {
        const selectedUsers = table
            .getSelectedRowModel()
            .rows.map((row) => row.original);
        if (selectedUsers.length === 0) {
            return toast({
                description: "Please select at least one user",
                variant: "destructive",
            });
        }

        const userId = session.data?.uid;
        if (projectId && userId) {
            const users = selectedUsers.map((user) => user.uid);
            shareMutation.mutate({
                users,
                projectId,
                documentId: taskDetail?.id,
            });
        } else {
            return toast({
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <>
            <div className="w-full">
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header, index) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className={cn(index === 0 && "w-16")}
                                                onClick={(value: any) => {
                                                    let all = table.getIsAllPageRowsSelected();
                                                    table.toggleAllPageRowsSelected(all ? null : value);
                                                }}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        onClick={(value: any) =>
                                            row.toggleSelected(row.getIsSelected() ? null : value)
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="w-full flex items-end justify-end gap-2 mt-6">
                <CustomButton
                    onClick={closeModal}
                    className={cn(
                        global.body2,
                        "text-white font-semibold  bg-red-600 w-fit"
                    )}
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    onClick={() => handleShareDocument()}
                    className={cn(global.body2, "text-white font-semibold w-fit")}
                >
                    {shareMutation.isPending && <LOADER_BTN />}
                    Share
                </CustomButton>
            </div>
        </>
    );
}
