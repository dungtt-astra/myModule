package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"myModule/x/mymodule/types"
)

func (k msgServer) Commitment(goCtx context.Context, msg *types.MsgCommitment) (*types.MsgCommitmentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCommitmentResponse{}, nil
}
