class MortgageMachine
  def initialize(owner:, register: {})
    @owner = owner
    @register = {}
  end

  def release_mortgage(initiator:, asset:)
    if (asset_already_mortagaged?(asset))
      @register.delete(asset)
    else
      fail 'Asset not mortagaged by the initiator'
    end
  end

  def asset_already_mortagaged?(asset:)
    @register.key?(asset)
  end

  def mortgage(initiator:, bank:, asset:)

  end
end
