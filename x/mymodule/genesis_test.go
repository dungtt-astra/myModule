package mymodule_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "myModule/testutil/keeper"
	"myModule/testutil/nullify"
	"myModule/x/mymodule"
	"myModule/x/mymodule/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MymoduleKeeper(t)
	mymodule.InitGenesis(ctx, *k, genesisState)
	got := mymodule.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
