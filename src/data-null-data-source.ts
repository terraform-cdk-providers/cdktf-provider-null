// https://www.terraform.io/docs/providers/null/d/data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNullDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/null/d/data_source.html#has_computed_default DataNullDataSource#has_computed_default}
  */
  readonly hasComputedDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/null/d/data_source.html#inputs DataNullDataSource#inputs}
  */
  readonly inputs?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/null/d/data_source.html null_data_source}
*/
export class DataNullDataSource extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/null/d/data_source.html null_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNullDataSourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNullDataSourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'null_data_source',
      terraformGeneratorMetadata: {
        providerName: 'null'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hasComputedDefault = config.hasComputedDefault;
    this._inputs = config.inputs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_computed_default - computed: true, optional: true, required: false
  private _hasComputedDefault?: string;
  public get hasComputedDefault() {
    return this.getStringAttribute('has_computed_default');
  }
  public set hasComputedDefault(value: string) {
    this._hasComputedDefault = value;
  }
  public resetHasComputedDefault() {
    this._hasComputedDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasComputedDefaultInput() {
    return this._hasComputedDefault
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: { [key: string]: string };
  public get inputs() {
    return this.interpolationForAttribute('inputs') as any;
  }
  public set inputs(value: { [key: string]: string } ) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getStringAttribute('random');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_computed_default: cdktf.stringToTerraform(this._hasComputedDefault),
      inputs: cdktf.hashMapper(cdktf.anyToTerraform)(this._inputs),
    };
  }
}
