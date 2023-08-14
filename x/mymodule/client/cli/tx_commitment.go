package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"myModule/x/mymodule/types"
)

var _ = strconv.Itoa(0)

func CmdCommitment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "commitment [from] [coin-a] [to-a-timelock] [blockheight] [to-b-hashlock] [hashcode] [coinlock]",
		Short: "Broadcast message commitment",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argCoinA := args[1]
			argToATimelock := args[2]
			argBlockheight := args[3]
			argToBHashlock := args[4]
			argHashcode := args[5]
			argCoinlock := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCommitment(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argCoinA,
				argToATimelock,
				argBlockheight,
				argToBHashlock,
				argHashcode,
				argCoinlock,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
